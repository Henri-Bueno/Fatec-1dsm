import { useState, type KeyboardEvent } from "react";
import useWeather from "../hooks/useWeather";
import ForecastCard from "./ForeCastCard";

export default function WeatherSearch() {
  const [cityName, setCityName] = useState("");

  const { cities, findCities, cityLoading, cityForecast, foreCast } = useWeather();

  async function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      findCities(cityName.trim());
    }
  }

  let message = "";

  if (cityLoading) {
    message = "Buscando cidades...";
  }

  return (
    <>
      <input
        className="city-input"
        type="text"
        placeholder="Ex.: Guararema"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p className="message">{message}</p>
      <div className="city-list">
        {cities.map(function (city) {
          return (
            <button
              className="city-option"
              key={city.id}
              onClick={() => cityForecast(city.id)}
            >
              {city.nome} - {city.estado}
            </button>
          );
        })}
      </div>
      { foreCast && <ForecastCard/>}
    </>
  );
}
