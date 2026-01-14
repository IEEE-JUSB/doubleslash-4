"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PowerContextType = {
  togglePower: boolean;
  setTogglePower: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const PowerContext = createContext<PowerContextType | undefined>(undefined);

export function PowerProvider({ children }: { children: ReactNode }) {
  const [togglePower, setTogglePower] = useState(false);

  return (
    <PowerContext.Provider value={{ togglePower, setTogglePower }}>
      {children}
    </PowerContext.Provider>
  );
}

export function usePower() {
  const context = useContext(PowerContext);
  if (context === undefined) {
    throw new Error("usePower must be used within a PowerProvider");
  }
  return context;
}
