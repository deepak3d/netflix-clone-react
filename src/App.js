import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1> this first project </h1> 
      <Row title="Netflix Originals" fetctUrl={requests.fetchNetflixOriginals}/>
      <Row title="Treding Now" fetctUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
