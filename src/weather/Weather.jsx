import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9437a06f46b8b896a364ee23b0195a8c&units=metric`
      );
      setData(res.data);
    } catch (err) {
      alert("City not found");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        border: "1px solid gray",
        padding: "1rem",
      }}
    >
      <h2>🌤️ Weather App</h2>
      <input
        style={{ padding: "8px", fontSize: "17px" }}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />{" "}
      <button onClick={getWeather}>Get Weather</button>
      {data && (
        <div style={{ marginTop: "20px" }}>
          <h2>{data.name}</h2>
          <h3>
            🌡️ Temp:{" "}
            <span style={{  }}>{data.main.temp}°C</span>{" "}
          </h3>
          <h3>💧 Humidity: {data.main.humidity}%</h3>
          <h3>🌬️ Wind: {data.wind.speed} m/s</h3>
        </div>
      )}
    </div>
  );
}

export default Weather;
