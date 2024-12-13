import React from "react";
import CompB from "./CompB";

export const userContext = React.createContext();
  export const CompA = () => {
  return (
    <userContext.Provider value={"ReactJS"}>
      <CompB />
    </userContext.Provider>
  );
};


export default CompA