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
  initialQuery: string;
  initialResults?: SearchResultsProps["results"];
}

const Home: NextPage<HomeProps> = ({
  initialError,
  initialQuery,
  initialResults,
}) => {
  const [error, setError] = useState(initialError);
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(initialResults);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQueryParameters(query);
    executeSearch(query);
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
        {/* handle this better */}
        {error && <p>{error}</p>}
        <SearchForm
          onChange={onChange}
          onSubmit={onSubmit}
          query={query}
          title="Advanced Search"
        />
        <SearchResults
          aria-label="Search Results"
          noResultsMessage="No Results..."
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
  const { data, error } = await search(query);
  return {
    props: {
      initialError: error?.toString() ?? null,
      initialQuery: query,
      initialResults: normalizeRepos(data),
    },
  };
};
