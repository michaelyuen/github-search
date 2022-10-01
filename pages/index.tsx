import type { NextPage } from "next";
import Head from "next/head";
import { Input, ResultsContainer } from "../components";

const Home: NextPage = () => {
  return (
    <div>
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
        <h3>Advanced Search</h3>
        <Input />
        <h3>Search Results:</h3>
        <ResultsContainer />
      </main>
    </div>
  );
};

export default Home;
