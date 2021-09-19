import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from "../src/styles/GlobalStyle";

import Home from "../src/pages/Home"

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;