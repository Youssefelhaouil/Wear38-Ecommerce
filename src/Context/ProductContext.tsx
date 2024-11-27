import React, { createContext, ReactNode, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { IProduct } from "../interfaces";

interface IFetchContext {
    isLoading: boolean;
    data: IProduct[] |null; 
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
  }
  
  interface IFetchProviderProps {
    children: ReactNode;
  }
export const FetchContext = createContext<IFetchContext |undefined>(undefined);

export const FetchProvider = ({ children } :IFetchProviderProps ) => {
  const [url, setUrl] = useState("");

  const { isLoading, data } = useFetch({
    queryKey: ["ProductData", url], 
    url:url,
  });

  return (
    <FetchContext.Provider value={{ isLoading, data, url, setUrl }}>
      {children}
    </FetchContext.Provider>
  );
};
