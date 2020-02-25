import React from "react";
import EditedDate from "./EditedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div classname="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <EditedDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>{" "}
          {""}
          <span className="unit">°C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {props.data.precipitation} %</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
