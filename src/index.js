import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Helmet} from "react-helmet";
import {Provider} from "react-redux";
import store from "./redux/store";

import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";

import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'https://cat-end.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <Helmet>
            <title>Catsat</title>
            <meta property="og:title" content="Catsat"/>
            <meta property="og:site_name" content="Catsat"/>
          </Helmet>
          <ScrollToTop>
            <App/>
          </ScrollToTop>
        </Router>
      </Provider>
    </ApolloProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
