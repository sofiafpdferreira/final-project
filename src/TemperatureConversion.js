import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div classname="Conversion">
        <span className="temperature">{Math.round(props.celsius)}</span> {""}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div classname="Conversion">
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>{" "}
        {""}
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
