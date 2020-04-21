import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Search from './components/Layout/Search';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
