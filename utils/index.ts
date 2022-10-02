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
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${queryParameters.toString()}`
    );
  }
};
