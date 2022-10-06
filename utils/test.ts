import { validateQuery } from ".";

describe("Utils", () => {
  describe("validateQuery", () => {
    test("'atom' is not valid", () => {
      expect(validateQuery("atom")).toStrictEqual({
        isValid: false,
        error: 'No "user" or "stars" qualifiers found. No search executed.',
        value: "",
      });
    });

    describe("user qualifier queries", () => {
      test("'user' is not valid", () => {
        expect(validateQuery("user")).toStrictEqual({
          isValid: false,
          error: 'Qualifier "user" is missing the value (e.g., user:USERNAME).',
          value: "user",
        });
      });

      test("'user stars' is not valid", () => {
        expect(validateQuery("user stars")).toStrictEqual({
          isValid: false,
          error:
            'Qualifier "user" is missing the value (e.g., user:USERNAME). Qualifier "stars" is missing the value (e.g., stars:n).',
          value: "user stars",
        });
      });

      test("'user:' is not valid", () => {
        expect(validateQuery("user:")).toStrictEqual({
          isValid: false,
          error:
            'Qualifier "user:" is missing the value (e.g., user:USERNAME).',
          value: "user:",
        });
      });

      test("'user:stars' is not valid", () => {
        expect(validateQuery("user:stars")).toStrictEqual({
          isValid: false,
          error:
            'Qualifier value "stars" is not a valid username. It\'s a reserved word.',
          value: "user:stars",
        });
      });

      test("'user:about' is not valid", () => {
        expect(validateQuery("user:about")).toStrictEqual({
          isValid: false,
          error:
            'Qualifier value "about" is not a valid username. It\'s a reserved word.',
          value: "user:about",
        });
      });

      test("'user:help' is not valid", () => {
        expect(validateQuery("user:help")).toStrictEqual({
          isValid: false,
          error:
            'Qualifier value "help" is not a valid username. It\'s a reserved word.',
          value: "user:help",
        });
      });

      test("'user:pricing' is not valid", () => {
        expect(validateQuery("user:pricing")).toStrictEqual({
          isValid: false,
          error:
            'Qualifier value "pricing" is not a valid username. It\'s a reserved word.',
          value: "user:pricing",
        });
      });

      test("'user:@me' is not valid", () => {
        expect(validateQuery("user:@me")).toStrictEqual({
          isValid: false,
          error:
            'Qualifier value "@me" is not a valid username. It\'s a reserved word.',
          value: "user:@me",
        });
      });

      test("'user:michael:yuen' is not valid", () => {
        expect(validateQuery("user:michael:yuen")).toStrictEqual({
          isValid: false,
          error:
            "Github username may only contain alphanumeric characters or hyphens.",
          value: "user:michael:yuen",
        });
      });

      test("'user:michaelyuen' is valid", () => {
        expect(validateQuery("user:michaelyuen")).toStrictEqual({
          isValid: true,
          error: null,
          value: "user:michaelyuen",
        });
      });

      test("'user:michael1' is valid", () => {
        expect(validateQuery("user:michael1")).toStrictEqual({
          isValid: true,
          error: null,
          value: "user:michael1",
        });
      });

      test("'user:michael-1' is valid", () => {
        expect(validateQuery("user:michael-1")).toStrictEqual({
          isValid: true,
          error: null,
          value: "user:michael-1",
        });
      });

      test("'user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' is valid", () => {
        expect(
          validateQuery("user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        ).toStrictEqual({
          isValid: true,
          error: null,
          value: "user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        });
      });

      test("'user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' is not valid", () => {
        expect(
          validateQuery("user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        ).toStrictEqual({
          isValid: false,
          error: "The maximum length for a username is 39.",
          value: "user:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        });
      });
    });

    describe("stars qualifiers", () => {
      test("'stars' is not valid", () => {
        expect(validateQuery("stars")).toStrictEqual({
          isValid: false,
          error: 'Qualifier "stars" is missing the value (e.g., stars:n).',
          value: "stars",
        });
      });

      test("'stars user' is not valid", () => {
        expect(validateQuery("stars user")).toStrictEqual({
          isValid: false,
          error:
            'Qualifier "stars" is missing the value (e.g., stars:n). Qualifier "user" is missing the value (e.g., user:USERNAME).',
          value: "stars user",
        });
      });

      test("'stars:' is not valid", () => {
        expect(validateQuery("stars:")).toStrictEqual({
          isValid: false,
          error: 'Qualifier "stars:" is missing the value (e.g., stars:n).',
          value: "stars:",
        });
      });

      test("'stars:user' is not valid", () => {
        expect(validateQuery("stars:user")).toStrictEqual({
          isValid: false,
          error: 'The value for the "stars" qualifier can\'t contain letters.',
          value: "stars:user",
        });
      });

      test("'stars:anything' is not valid", () => {
        expect(validateQuery("stars:anything")).toStrictEqual({
          isValid: false,
          error: 'The value for the "stars" qualifier can\'t contain letters.',
          value: "stars:anything",
        });
      });

      test("'stars:10' is valid", () => {
        expect(validateQuery("stars:10")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:10",
        });
      });

      test("'stars:10x' is not valid", () => {
        expect(validateQuery("stars:10x")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:10x" is invalid. Please check your syntax and try again.',
          value: "stars:10x",
        });
      });

      test("'stars:>10' is valid", () => {
        expect(validateQuery("stars:>10")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:>10",
        });
      });

      test("'stars:10>' is not valid", () => {
        expect(validateQuery("stars:10>")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:10>" is not supported. The number must come after the symbol(s).',
          value: "stars:10>",
        });
      });

      test("'stars:>>10' is not valid", () => {
        expect(validateQuery("stars:>>10")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:>>10" is not supported. Try formatting as “stars:>10”.',
          value: "stars:>>10",
        });
      });

      test("'stars:>==10' is not valid", () => {
        expect(validateQuery("stars:>==10")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:>==10" is invalid. Please check your syntax and try again.',
          value: "stars:>==10",
        });
      });

      test("'stars:>=10' is valid", () => {
        expect(validateQuery("stars:>=10")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:>=10",
        });
      });

      test("'stars:=>10' is not valid", () => {
        expect(validateQuery("stars:=>10")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:=>10" is invalid. Please check your syntax and try again.',
          value: "stars:=>10",
        });
      });

      test("'stars:<10' is valid", () => {
        expect(validateQuery("stars:<10")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:<10",
        });
      });

      test("'stars:<=10' is valid", () => {
        expect(validateQuery("stars:<=10")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:<=10",
        });
      });

      test("'stars:10..500' is valid", () => {
        expect(validateQuery("stars:10..500")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:10..500",
        });
      });

      test("'stars:10...500' is not valid", () => {
        expect(validateQuery("stars:10...500")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:10...500" is not supported. Try formatting as “stars:10..500” in order to search for repositories with between 10 and 500 stars.',
          value: "stars:10...500",
        });
      });

      test("'stars:10-500' is not valid", () => {
        expect(validateQuery("stars:10-500")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:10-500" is not supported. Try formatting as “stars:10..500” in order to search for repositories with between 10 and 500 stars.',
          value: "stars:10-500",
        });
      });

      test("'stars:10..*' is valid", () => {
        expect(validateQuery("stars:10..*")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:10..*",
        });
      });

      test("'stars:10--*' is not valid", () => {
        expect(validateQuery("stars:10--*")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:10--*" is not supported. Try formatting as “stars:10..*” in order to search for repositories with between 10 and * stars.',
          value: "stars:10--*",
        });
      });

      test("'stars:*..500' is valid", () => {
        expect(validateQuery("stars:*..500")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:*..500",
        });
      });
    });

    describe("combined user and stars qualifiers", () => {
      test("'user:atom stars:10..25' is valid", () => {
        expect(validateQuery("user:atom stars:10..25")).toStrictEqual({
          isValid: true,
          error: null,
          value: "user:atom stars:10..25",
        });
      });

      test("'stars:10..25 user:atom' is valid", () => {
        expect(validateQuery("stars:10..25 user:atom")).toStrictEqual({
          isValid: true,
          error: null,
          value: "stars:10..25 user:atom",
        });
      });

      test("'user:atom stars:10..25 user:react' is valid'", () => {
        expect(
          validateQuery("user:atom stars:10..25 user:react")
        ).toStrictEqual({
          isValid: true,
          error: null,
          value: "user:atom stars:10..25",
        });
      });

      test("'user:atom  user:react user:foo stars:10..25 stars:>500' is valid'", () => {
        expect(
          validateQuery(
            "user:atom  user:react user:foo stars:10..25 stars:>500"
          )
        ).toStrictEqual({
          isValid: true,
          error: null,
          value: "user:atom stars:10..25",
        });
      });

      test("'user:atom stars:10-25' is not valid'", () => {
        expect(validateQuery("user:atom stars:10-25")).toStrictEqual({
          isValid: false,
          error:
            'The following qualifier syntax: "stars:10-25" is not supported. Try formatting as “stars:10..25” in order to search for repositories with between 10 and 25 stars.',
          value: "user:atom stars:10-25",
        });
      });
    });
  });
});
