import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import {
  Error,
  normalizeRepos,
  SearchForm,
  SearchResults,
  SearchResultsProps,
} from "../components";
import { search } from "../graphql";
import {
  getFirstQueryParam,
  setQueryParameters,
  validateQuery,
} from "../utils";

interface HomeProps {
  initialError?: string;
  initialFormError?: string;
  initialQuery?: string;
  initialResults?: SearchResultsProps["results"];
}

const Home: NextPage<HomeProps> = ({
  initialError,
  initialFormError,
  initialQuery,
  initialResults,
}) => {
  const [error, setError] = useState(initialError);
  const [formError, setFormError] = useState<string | null | undefined>(
    initialFormError
  );
  const [hasSearched, setHasSearched] = useState(!!initialQuery);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState(initialQuery ?? "");
  const [results, setResults] = useState(initialResults);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onKeyUp = (event: React.KeyboardEvent) => {
    if (event.code === "Space" && query.trim()) {
      executeSearch(query);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query) {
      executeSearch(query);
    }
  };

  const executeSearch = async (query: string) => {
    const validationResult = validateQuery(query);

    if (!validationResult.isValid) {
      setFormError(validationResult.error);
    } else {
      setFormError(null);
      setLoading(true);
      setQueryParameters(validationResult.value);
      const { data, error } = await search(validationResult.value);
      if (error) {
        console.error(error);
        setError(error.toString());
      }
      const results = normalizeRepos(data);
      if (results) {
        setResults(results);
      }
      setHasSearched(true);
      setLoading(false);
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
          error={formError}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onSubmit={onSubmit}
          query={query}
          title="Advanced Search"
        />
        {error && <Error message={error} />}
        {!error && (
          <SearchResults
            aria-label="Search Results"
            hasSearched={hasSearched}
            isLoading={isLoading}
            results={results}
            title="Search Results"
          />
        )}
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const query = getFirstQueryParam(context.query?.q ?? "");
  if (query) {
    const validationResult = validateQuery(query);
    if (validationResult.error) {
      return {
        props: {
          initialFormError: validationResult.error,
          initialQuery: query,
        },
      };
    }

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
