import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-app">
            <Weather />
          </div>
          <small>
            <a href="https://github.com/ElCart3/react-weather-app">
              Open-sourced code
            </a>{" "}
            by Ellie Carter
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
