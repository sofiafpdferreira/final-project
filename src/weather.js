import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Type a city here ..."
              className="form"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>city</h1>
      <ul>
        <li>day time</li>
        <li> description</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="description"
          />
          <span className="temperature">x</span> {""}
          <span className="unit">°C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: x %</li>
            <li>Humidity: x %</li>
            <li>Wind: x Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
