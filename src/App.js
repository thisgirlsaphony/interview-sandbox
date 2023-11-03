import React from "react";
import lodash from "lodash";

export default function App() {
  let randomNumber = lodash.random(0, 10);

  return <div>Random number: {randomNumber}</div>;
}
