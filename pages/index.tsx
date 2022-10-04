import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import {
  normalizeRepos,
  SearchForm,
  SearchResults,
  SearchResultsProps,
} from "../components";
import { search } from "../graphql";
import { getFirstQueryParam, setQueryParameters } from "../utils";

interface HomeProps {
  initialError?: string;
  initialQuery?: string;
  initialResults?: SearchResultsProps["results"];
}

const Home: NextPage<HomeProps> = ({
  initialError,
  initialQuery,
  initialResults,
}) => {
  const [error, setError] = useState(initialError);
  const [hasSearched, setHasSearched] = useState(!!initialQuery);
  const [query, setQuery] = useState(initialQuery ?? "");
  const [results, setResults] = useState(initialResults);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQueryParameters(query);
    executeSearch(query);
    setHasSearched(true);
  };

  const executeSearch = async (query: string) => {
    const { data, error } = await search(query);
    if (error) {
      console.error(error);
      setError(error.toString());
    }
    const results = normalizeRepos(data);
    if (results) {
      setResults(results);
    }
  };

  return (
    <>
      <Head>
        <title>GitHub Search</title>
        <meta
          name="description"
          content="GitHub search app for Syndio take home test"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>GitHub Search</h1>
        <SearchForm
          onChange={onChange}
          onSubmit={onSubmit}
          query={query}
          title="Advanced Search"
        />
        {/* handle this better */}
        {error && <p>{error}</p>}
        <SearchResults
          aria-label="Search Results"
          hasSearched={hasSearched}
          results={results}
          title="Search Results"
        />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = getFirstQueryParam(context.query?.q ?? "");
  if (query) {
    const { data, error } = await search(query);
    return {
      props: {
        initialError: error?.toString() ?? null,
        initialQuery: query,
        initialResults: normalizeRepos(data),
      },
    };
  }
  return { props: {} };
};
