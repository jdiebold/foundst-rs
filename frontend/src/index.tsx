import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
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
