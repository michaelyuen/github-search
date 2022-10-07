# GitHub Repository Search App

https://my-github-search.vercel.app/

This app allows you to search GitHub's repositories, specifically using the `user` and/or `stars` qualifiers. [See GitHub's docs for more info.](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)

ℹ️ **Only** `user` and `stars` are supported. General queries or other qualifiers are ignored.

## Getting Started

First, make sure you install the dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run Tests

### Unit - Watching

```bash
  yarn test:unit
```

### Unit - Coverage Report

```bash
  yarn test:unit:coverage
```

## Features

- Search using `user` and/or `stars` qualifiers with advanced validation for the special syntax ([and well-tested!](./utils/test.ts))
- Search executes when either the <kbd>Space</kbd> or <kbd>Return</kbd> key is pressed.
- Query parameter syncs with search for improved persistence and bookmarking
- Results are cached by query for the session.
  - This is handled out of the box by [urlq](https://github.com/FormidableLabs/urql). 🎉
  - Simple urql client is used to query the [GitHub GraphQL API](https://docs.github.com/en/graphql)
- Page is server-side rendered and cached by the browser for ~1 minute using cache-control header
- Adapts to light or dark theme based on system

## Known Issues

- Local TypeScript warnings in test files. Seems to be related to conflicts between Jest and Cypress. Harmless, but a bit annoying. ([Reference](https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions))
- Getting `start-server-and-test` to work with Next.js and Cypress as outlined [here](https://nextjs.org/docs/testing#running-your-cypress-tests).
  - This relates to difficulties encountered in tryng to set up a GitHub Action to run the end-to-end tests

**ℹ️ If you find any other issues, please open an Issue!**

## Known Limitations & Future enhancements

- The search is hardcoded to only query for Repository results. In the future, this could be expanded to support other result types.
- The search is hardcoded to return 50 results. In the future, support could be added for pagination or lazy-loading. Also, allowing users to choose the number of results or page size could be worth considering.
- Sorting of page results
- Enhanced search results. Currently the data displayed is a small subset.
