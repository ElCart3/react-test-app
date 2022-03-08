import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    date: "Monday, 10:00",
    city: "Gloucester",
    temperature: 10,
    description: "scattered clouds",
    feelsLike: 7,
    wind: 6,
    humidity: 83,
  };
  return (
    <div className="Weather">
      <form id="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Search for a city..."
              autoComplete="off"
              className="form-search search"
              id="city-input"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="form-submit button"
            />
          </div>
          <div className="col-2">
            <button id="current-location" className="form-submit button">
              Current
            </button>
          </div>
        </div>
      </form>
      <div className="date-time" id="date-time">
        {weatherData.date}
      </div>
      <h1 id="city">{weatherData.city}</h1>
      <div className="row middle">
        <div className="col d-flex weather-temperature align-items-center">
          <div className="col offset-1">
            <span className="current-temp" id="temperature">
              {weatherData.temperature}
            </span>
            <span className="units">°C </span>
          </div>
          <div className="col">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              id="weather-icon"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="details">
            <ul>
              <li>
                <strong className="description" id="description">
                  {weatherData.description}
                </strong>
              </li>
              <li>
                Feels like: <span id="feels-like">{weatherData.feelsLike}</span>
                °C
              </li>
              <li>
                Wind speed: <span id="wind">{weatherData.wind}</span> km/h
              </li>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
