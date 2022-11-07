import React from "react";
import Header from "./Header";
import Main from "./Main";
import SearchBar from './SearchBar'

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Main />
    </div>
  );
}

export default App;
