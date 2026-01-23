import { createContext, useContext } from "react";

export const ParkContext = createContext(null);

export const usePark = () => useContext(ParkContext);
