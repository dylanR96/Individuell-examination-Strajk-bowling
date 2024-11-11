import React, { createContext, useContext, useState, ReactNode } from "react";

interface ResponseData {
  when: string;
  lanes: number;
  players: number;
  shoes: number[];
  price: number;
  id: string;
  active: boolean;
}

const ResponseDataContext = createContext<{
  responseData: ResponseData | null;
  setResponseData: React.Dispatch<React.SetStateAction<ResponseData | null>>;
} | null>(null);

export const useResponseData = () => {
  const context = useContext(ResponseDataContext);
  if (!context) {
    throw new Error(
      "useResponseData must be used within a ResponseDataProvider"
    );
  }
  return context;
};

export const ResponseDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

  return (
    <ResponseDataContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </ResponseDataContext.Provider>
  );
};
