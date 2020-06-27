import ReactDOM from "react-dom";
import React from "react";

import "./style.scss";
import { MainHeader } from "./main-header.jsx";
import { Main } from "./pages/main.jsx";

const domContainer = document.getElementById("react-app");

const App = () => (
  <div>
    <MainHeader />
    <main>
      <Main />
    </main>
  </div>
);

ReactDOM.render(<App />, domContainer);
