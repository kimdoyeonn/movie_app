import React from "react";
import { HashRouter, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "Routes/Home";
import About from "Routes/About";
import Detail from "Routes/Detail";
import Navigation from "Components/Navigation";

function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
      </HashRouter>
    </>
  );
}

export default App;
