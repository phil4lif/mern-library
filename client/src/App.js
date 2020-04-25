import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Search from './components/Layout/Search';
import Saved from './components/Layout/Saved';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  About from './components/About'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route path="/about" component={About} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

