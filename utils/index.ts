export const getFirstQueryParam = (qp: string | string[]) =>
  Array.isArray(qp) ? qp[0] : qp;

export const setQueryParameters = (query: string) => {
  if (typeof window === "undefined") {
    console.warn(
      "[setQueryParameters] this function is only intended to be called in a browser environment"
    );
  } else {
    const queryParameters = new URLSearchParams();
    if (!!query) {
      queryParameters.set("q", query);
    }

    // TODO(@my): Research changing to pushState, but need to detect browser back/forward button too
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${queryParameters.toString()}`
    );
  }
};

export const RESERVED_USERNAMES = /^@me|about|help|pricing|stars$/;

export interface NormalizedQueryPart {
  isValid: boolean;
  error: string | null;
  value: string;
}

export const validateQuery = (query: string): NormalizedQueryPart => {
  /**
   * Step 1) Get valid matches for `user:*` and/or `stars:*` and ignore everything else
   * - There may be multiple instances of each qualifier, so we reduce the matches to
   * only the first instance of each.
   */
  const queryParts = query
    .match(/(user:?(\S+)?)|(stars:?(\S+)?)/g)
    ?.reduce((uniqueMatches, match) => {
      const key = match.split(":")[0];
      const found = !!uniqueMatches.find((match) => match.includes(key));
      if (found) {
        return uniqueMatches;
      } else {
        return [...uniqueMatches, match];
      }
    }, [] as string[]);

  if (!queryParts) {
    return {
      isValid: false,
      error: 'No "user" or "stars" qualifiers found. No search executed.',
      value: "",
    };
  }

  /**
   * Step 2) Validate each queryPart and map into normalized object for form to consume
   * - Valid or not, always return object with `isValid`, `error`, and `value`.
   * - The final step will combine these objects into a final validation result.
   */
  const normalizedQueryParts = queryParts.map(
    (queryPart): NormalizedQueryPart => {
      const [, value] = queryPart.split(/:(.*)/s);

      // Let's rule out `user` and `user:`
      if (/^user:?$/.test(queryPart)) {
        return {
          isValid: false,
          error: `Qualifier "${queryPart}" is missing the value (e.g., user:USERNAME).`,
          value: queryPart,
        };
        // Anything in here must match `user:*`
      } else if (/^user:.+?/.test(queryPart)) {
        if (RESERVED_USERNAMES.test(value)) {
          return {
            isValid: false,
            error: `Qualifier value "${value}" is not a valid username. It's a reserved word.`,
            value: queryPart,
          };
        } else if (value.startsWith("-") || value.endsWith("-")) {
          return {
            isValid: false,
            error: `Github username cannot begin or end with a hyphen.`,
            value: queryPart,
          };
        } else if (value.includes("--")) {
          return {
            isValid: false,
            error: `Github username cannot have multiple consecutive hyphens`,
            value: queryPart,
          };
        } else if (value.length > 39) {
          return {
            isValid: false,
            error: `The maximum length for a username is 39.`,
            value: queryPart,
          };

          /**
           * Reference: https://github.com/shinnn/github-username-regex
           * Note: modified to handle character length check separately
           */
        } else if (/^[a-z\d](?:[a-z\d]|-(?=[a-z\d]))*$/i.test(value)) {
          return {
            isValid: true,
            error: null,
            value: queryPart,
          };
        } else {
          return {
            isValid: false,
            error: `Github username may only contain alphanumeric characters or hyphens.`,
            value: queryPart,
          };
        }
      }

      // Let's rule out `stars` and `stars:`
      if (/^stars:?$/.test(queryPart)) {
        return {
          isValid: false,
          error: `Qualifier "${queryPart}" is missing the value (e.g., stars:n).`,
          value: queryPart,
        };
        // Anything in here must match `stars:*`
      } else if (/^stars:.+?/.test(queryPart)) {
        if (/^[a-zA-Z]+$/.test(value)) {
          return {
            isValid: false,
            error: `The value for the "stars" qualifier can't contain letters.`,
            value: queryPart,
          };
        } else if (/^\d+(>|<|=)$/.test(value)) {
          return {
            isValid: false,
            error: `The following qualifier syntax: "${queryPart}" is not supported. The number must come after the symbol(s).`,
            value: queryPart,
          };
        } else if (/^(>{2,}|<{2,}|={2,})\d+$/.test(value)) {
          const correctQueryPart = queryPart.replace(
            /(>{2,}|<{2,}|={2,})/,
            (match: string) => match[0]
          );
          return {
            isValid: false,
            error: `The following qualifier syntax: "${queryPart}" is not supported. Try formatting as “${correctQueryPart}”.`,
            value: queryPart,
          };
        } else if (/^(\d+|\*)(-+|\.{3,})(\d+|\*)$/.test(value)) {
          const correctQueryPart = queryPart.replace(/-+|\.{3,}/, "..");
          const [first, second] = value.split(/-+|\.{3,}/);
          return {
            isValid: false,
            error: `The following qualifier syntax: "${queryPart}" is not supported. Try formatting as “${correctQueryPart}” in order to search for repositories with between ${first} and ${second} stars.`,
            value: queryPart,
          };
        } else if (/^(\d+|[><]=?\d+|\d+..\*|\*..\d+|\d+..\d+)$/.test(value)) {
          return {
            isValid: true,
            error: null,
            value: queryPart,
          };
        } else {
          return {
            isValid: false,
            error: `The following qualifier syntax: "${queryPart}" is invalid. Please check your syntax and try again.`,
            value: queryPart,
          };
        }
      }

      // I don't think this should ever be returned, but famous last words...
      return {
        isValid: false,
        error: `The following qualifier syntax: "${queryPart}" is invalid. Please check your syntax and try again.`,
        value: queryPart,
      };
    }
  );

  /**
   * Step 3) Consolidate normalized queryPart objects into single object for the form to consume
   * - Primarily relevant when both qualifiers are present
   * - If either queryPart's format is invalid, the query is invalid
   * - If both qualifiers are present and have failed validation, combine the error messages into one.
   * - If both qualifiers are present and are valid, combine each queryPart back into single query.
   */
  return normalizedQueryParts.reduce((all, part) => {
    return {
      ...all,
      isValid: all.isValid === false ? false : part.isValid,
      error: all.error ? `${all.error} ${part.error ?? ""}` : part.error,
      value: all.value ? `${all.value} ${part.value}` : part.value,
    };
  }, {} as NormalizedQueryPart);
};
