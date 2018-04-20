import React from "react";
import ReactDOM from "react-dom";

import Clock from './clock';

ReactDOM.render(
  <Clock />,
  document.getElementById("app"),
  function() {
    console.log("OK!!!!!");
  }
);
