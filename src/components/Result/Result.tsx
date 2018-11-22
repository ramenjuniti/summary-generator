import * as React from "react";

const Result: React.SFC = props => {
  return <React.Fragment>{JSON.stringify(props)}</React.Fragment>;
};

export default Result;
