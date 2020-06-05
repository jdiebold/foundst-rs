import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { HttpLink } from "apollo-link-http";

const httpLink = new HttpLink({
  uri: "http://localhost:8080/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
