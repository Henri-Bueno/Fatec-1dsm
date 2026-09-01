import { createContext } from "react";
import type { City } from "../types/weather";

export interface weatherContextValue {
  cities: City[];
  cityLoading: boolean;
  setCityLoading: (value: boolean) => void;
  findCities: (name: string) => void;
  cityForecast: (id: number) => void;
}

export const weatherContext = createContext<weatherContextValue | undefined>(
  undefined,
);
