import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./Header";
import { Home } from "./Home";
import { Page } from "./Page";
import { About } from "./About";
import { Contacts } from "./Contacts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/page" component={Page} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
      </div>
    </Router>
  );
}

export default App;
