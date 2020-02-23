import React from "react";
import Weather from "./weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Weather App </h1>
        <Weather defaultCity="Lisbon" />
        <footer>
          Open source code
          <a
            href="https://github.com/sofiafpdferreira/final-project"
            target="_blank"
          >
            {""} link {""}
          </a>
          by
          <a href="https://pt.linkedin.com/in/sofia-franco-ferreira-17822b170">
            {" "}
            Sofia F. Ferreira
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
