import React from "react";
import { userContext } from "./CompA";

const CompC = () => {
  return (
    <userContext.Consumer>
      {(value) => <h1>Course name is {value}</h1>}
    </userContext.Consumer>
  );
};

export default CompC;fh
