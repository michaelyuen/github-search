This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## To Do

- [x] Create search result component
- [ ] Add react testing library
- [ ] Add cypress
- [ ] Write basic unit tests -- red, green, refactor
- [ ] Write basic cypress tests -- red, green, refactor
- [x] Add simple api implementation
  - [x] query on page load
  - [x] query on search enter
- [x] Add query param support
  - [ ] Validation when reading?
- [x] Persist on refresh -- sessionStorage?
  - [ ] This works based on SSR. Can I cache in some way?
- [ ] Validate input in onChange
- [ ] SearchForm -- loading, initial message, error message
- [ ] isLoading support
