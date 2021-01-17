import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      {/* nav */}
      <Nav />
      {/* banner */}
      <Banner />
      {/* <h1> this first project </h1>  */}
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Treding Now" fetchUrl={requests.fetchTrending}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comdey Movies" fetchUrl={requests.fetchComdeyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaies" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}
export default App;
