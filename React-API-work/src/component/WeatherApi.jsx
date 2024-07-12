import axios from "axios";
import React, { useState } from "react";

function WeatherApi() {
  const [search, setSearch] = useState("");
  const [alldata, setAllData] = useState([]);
  const [error, setError] = useState("");

  const handledata = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=4fae2a4535ad44d7a7e134321240907&q=${search}&aqi=no`
      )
      .then((res) => {
        console.log(res);
        setAllData([res]);
        setSearch("");
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("City not found. Please try again.");
      });
  };

  return (
    <>
      <div className="bg-info bg-opacity-25 p-4 alldataweather">
        <h2>Weather Api</h2>
        <br />
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city Name"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {alldata.map((item, index) => {
            const { data } = item;
            return (
              <div key={index} className="content">
                <h2 className="mt-2">{Math.round(data.current.temp_c)}°C</h2>
                <h2 className="mt-1">{data.location.name}</h2>
                <p className="fs-4">Humidity: {data.current.humidity}%</p>
                <p className="fs-4">Wind: {data.current.wind_kph} km/h</p>
              </div>
            );
          })}
          <button onClick={handledata} className="btn btn-primary px-3">
            Add data
          </button>
        </form>
      </div>
    </>
  );
}

export default WeatherApi;
