import type { NextPage } from "next";
import Head from "next/head";
import {
  normalizeRepos,
  SearchForm,
  SearchResults,
  SearchResultsProps,
} from "../components";
import { search } from "../graphql";

interface HomeProps {
  errorMessage?: string;
  results?: SearchResultsProps["results"];
}

const Home: NextPage<HomeProps> = ({ errorMessage, results }) => {
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
        {errorMessage && <p>{errorMessage}</p>}
        <SearchForm title="Advanced Search" />
        <SearchResults
          noResultsMessage="No Results..."
          results={results}
          title="Search Results"
        />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data, error } = await search("user:atom");

  if (error) console.log({ error });

  return {
    props: {
      errorMessage: error?.toString() ?? null,
      results: normalizeRepos(data),
    },
  };
};
