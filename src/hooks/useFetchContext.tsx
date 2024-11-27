import { useContext } from "react";
import { FetchContext } from "../Context/ProductContext";

export const useFetchContext = () => {
  const context = useContext(FetchContext);

  if (!context) {
    throw new Error("useFetchContext must be used within a FetchProvider");
  }

  return context;
};
