import React, { useState } from "react";

function Row({ title }) {
  const [movies, setMovies] = useState([]);

  // Row = () =>{
  return (
    <div>
      <h2> {title} </h2>
      {" container -> poster"}
    </div>
  );
}

export default Row;
