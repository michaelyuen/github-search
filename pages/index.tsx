import type { NextPage } from "next";
import Head from "next/head";
import { SearchForm, SearchResults } from "../components";

const mockResults = [
  {
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    fork: false,
    license: "MIT License",
    name: "facebook/react",
    stars: 133778,
    url: "https://github.com/facebook/react",
  },
  {
    description: " React+webpack+redux+ant design+axios+less全家桶后台管理框架",
    fork: false,
    license: "MIT License",
    name: "duxianwei520/react",
    stars: 2965,
    url: "https://github.com/duxianwei520/react",
  },
  {
    description: "Event-driven, non-blocking I/O with PHP.",
    fork: false,
    license: "MIT License",
    name: "reactphp/react",
    stars: 6989,
    url: "https://github.com/reactphp/react",
  },
  {
    description: "基于react的企业后台管理开发框架",
    fork: false,
    license: "MIT License",
    name: "react-redux-antd-es6/react",
    stars: 563,
    url: "https://github.com/react-redux-antd-es6/react",
  },
  {
    description: "Declarative routing for React",
    fork: false,
    license: "MIT License",
    name: "ReactTraining/react-router",
    stars: 37143,
    url: "https://github.com/ReactTraining/react-router",
  },
  {
    description: "The React Framework",
    fork: false,
    license: "MIT License",
    name: "zeit/next.js",
    stars: 39675,
    url: "https://github.com/zeit/next.js",
  },
  {
    description: "Set up a modern web app by running one command.",
    fork: false,
    license: "MIT License",
    name: "facebook/create-react-app",
    stars: 70264,
    url: "https://github.com/facebook/create-react-app",
  },
  {
    description: "Examples for the React Quickly book. ",
    fork: false,
    license: "MIT License",
    name: "azat-co/react",
    stars: 199,
    url: "https://github.com/azat-co/react",
  },
  {
    description: "🔼 UI-Router for React",
    fork: false,
    license: "MIT License",
    name: "ui-router/react",
    stars: 329,
    url: "https://github.com/ui-router/react",
  },
  {
    description:
      ":fire: A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.",
    fork: false,
    license: "MIT License",
    name: "react-boilerplate/react-boilerplate",
    stars: 23106,
    url: "https://github.com/react-boilerplate/react-boilerplate",
  },
  {
    description: "Get started with React, Redux, and React-Router.",
    fork: false,
    license: "MIT License",
    name: "davezuko/react-redux-starter-kit",
    stars: 10420,
    url: "https://github.com/davezuko/react-redux-starter-kit",
  },
  {
    description:
      "An advanced, composable, functional reactive model-view-viewmodel framework for all .NET platforms that is inspired by functional reactive programming. ReactiveUI allows you to  abstract mutable state away from your user interfaces, express the idea around a feature in one readable place and improve the testability of your application.",
    fork: false,
    license: "MIT License",
    name: "reactiveui/ReactiveUI",
    stars: 4747,
    url: "https://github.com/reactiveui/ReactiveUI",
  },
  {
    description: "A themable React component library",
    fork: false,
    license: "MIT License",
    name: "stardust-ui/react",
    stars: 334,
    url: "https://github.com/stardust-ui/react",
  },
  {
    description: "The Select Component for React.js",
    fork: false,
    license: "MIT License",
    name: "JedWatson/react-select",
    stars: 17422,
    url: "https://github.com/JedWatson/react-select",
  },
  {
    description: "Official React bindings for Redux",
    fork: false,
    license: "MIT License",
    name: "reduxjs/react-redux",
    stars: 17654,
    url: "https://github.com/reduxjs/react-redux",
  },
  {
    description: "Bootstrap components built with React",
    fork: false,
    license: "MIT License",
    name: "react-bootstrap/react-bootstrap",
    stars: 15989,
    url: "https://github.com/react-bootstrap/react-bootstrap",
  },
  {
    description:
      "React Starter Kit — isomorphic web app boilerplate (Node.js, Express, GraphQL, React.js, Babel, PostCSS, Webpack, Browsersync)",
    fork: false,
    license: "MIT License",
    name: "kriasoft/react-starter-kit",
    stars: 19390,
    url: "https://github.com/kriasoft/react-starter-kit",
  },
  {
    description:
      "React components for efficiently rendering large lists and tabular data",
    fork: false,
    license: "MIT License",
    name: "bvaughn/react-virtualized",
    stars: 16384,
    url: "https://github.com/bvaughn/react-virtualized",
  },
  {
    description:
      "UI component dev & test: React, Vue, Angular, React Native, Ember, Web Components & more!",
    fork: false,
    license: "MIT License",
    name: "storybookjs/storybook",
    stars: 40116,
    url: "https://github.com/storybookjs/storybook",
  },
  {
    description: "Your One-Stop solution for a full-stack universal Redux App!",
    fork: false,
    license: "MIT License",
    name: "reactGo/reactGo",
    stars: 2618,
    url: "https://github.com/reactGo/reactGo",
  },
  {
    description: "React Native for Web",
    fork: false,
    license: "MIT License",
    name: "necolas/react-native-web",
    stars: 14466,
    url: "https://github.com/necolas/react-native-web",
  },
  {
    description: "React carousel component ",
    fork: false,
    license: "MIT License",
    name: "akiran/react-slick",
    stars: 7251,
    url: "https://github.com/akiran/react-slick",
  },
  {
    description: "JavaScript Testing utilities for React",
    fork: false,
    license: "MIT License",
    name: "airbnb/enzyme",
    stars: 17703,
    url: "https://github.com/airbnb/enzyme",
  },
  {
    description: "Mobile, desktop and website Apps with the same code",
    fork: false,
    license: "MIT License",
    name: "benoitvallon/react-native-nw-react-calculator",
    stars: 4843,
    url: "https://github.com/benoitvallon/react-native-nw-react-calculator",
  },
  {
    description:
      "A frontend Framework for building admin applications running in the browser on top of REST/GraphQL APIs, using ES6, React and Material Design",
    fork: false,
    license: "MIT License",
    name: "marmelab/react-admin",
    stars: 9012,
    url: "https://github.com/marmelab/react-admin",
  },
  {
    description: "Cross Platform React Native UI Toolkit",
    fork: false,
    license: "MIT License",
    name: "react-native-training/react-native-elements",
    stars: 16723,
    url: "https://github.com/react-native-training/react-native-elements",
  },
  {
    description: "Simple React Bootstrap 4 components",
    fork: false,
    license: "MIT License",
    name: "reactstrap/reactstrap",
    stars: 8026,
    url: "https://github.com/reactstrap/reactstrap",
  },
  {
    description: "Modern React with Redux",
    fork: false,
    license: "MIT License",
    name: "StephenGrider/ReduxCasts",
    stars: 2462,
    url: "https://github.com/StephenGrider/ReduxCasts",
  },
  {
    description:
      "React + Redux starter kit / boilerplate with Babel, hot reloading, testing, linting and a working example app built in",
    fork: false,
    license: "MIT License",
    name: "coryhouse/react-slingshot",
    stars: 9401,
    url: "https://github.com/coryhouse/react-slingshot",
  },
  {
    description: "一个 react + redux 的完整项目 和 个人总结",
    fork: false,
    license: "MIT License",
    name: "bailicangdu/react-pxq",
    stars: 6270,
    url: "https://github.com/bailicangdu/react-pxq",
  },
];

const Home: NextPage = () => {
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
        <SearchForm title="Advanced Search" />
        <SearchResults
          noResultsMessage="No Results..."
          results={mockResults}
          title="Search Results"
        />
      </main>
    </>
  );
};

export default Home;
