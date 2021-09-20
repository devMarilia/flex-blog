import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "../src/styles/GlobalStyle";

import Home from "../src/pages/Home"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <GlobalStyle />
          <Route path="/" component={Home} />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;