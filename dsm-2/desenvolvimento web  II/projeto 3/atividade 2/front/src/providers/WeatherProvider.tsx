import { useState, type ReactNode } from "react";
import { weatherContext } from "../contexts/WeatherContext";
import { searchCities, getForecast } from "../services/weatherService";
import type { City } from "../types/weather";

interface WeatherProviderProps {
  children: ReactNode;
}

export default function WeatherProvider({ children }: WeatherProviderProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [cityLoading, setCityLoading] = useState(false);

  async function findCities(name: string) {
    try {
      setCityLoading(true);
      const foundCities = await searchCities(name);
      setCities(foundCities);
    } catch (error) {
      console.log(error.message);
    } finally {
      setCityLoading(false);
    }
  }

  async function cityForecast(id: number) {
    try {
      const lista = await getForecast(id);
      console.log(lista);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  return (
    <weatherContext.Provider
      value={{
        cities,
        cityLoading,
        setCityLoading,
        findCities,
        cityForecast,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
}
