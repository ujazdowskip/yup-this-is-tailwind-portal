import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.scss";
import { MainHeader } from "./main-header.jsx";

import { Main } from "./pages/main.jsx";
import { Article } from "./pages/article.jsx";

const domContainer = document.getElementById("react-app");

const App = () => (
  <div>
    <Router>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/article/:articleId">
            <Article />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </main>
    </Router>
  </div>
);

ReactDOM.render(<App />, domContainer);
