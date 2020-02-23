import React, { useState } from "react";
import axios from "axios";
import EditedDate from "./EditedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.dt * 1000)
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <EditedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize"> {weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            {""}
            <span className="unit">°C </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation} %</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c33f9f369abbfb38690d5dd06c2b8718";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loadig ...";
  }
}
