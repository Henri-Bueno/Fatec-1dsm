import { createContext } from "react";
import type { City, Forecast } from "../types/weather";

export interface weatherContextValue {
  cities: City[];
  cityLoading: boolean;
  setCityLoading: (value: boolean) => void;
  findCities: (name: string) => void;
  cityForecast: (id: number) => void;
  foreCast: Forecast | null
  foreCastLoading: boolean
}

export const weatherContext = createContext<weatherContextValue | undefined>(
  undefined,
);
