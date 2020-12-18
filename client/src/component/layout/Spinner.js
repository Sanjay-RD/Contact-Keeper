import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <React.Fragment>
      <img
        src={spinner}
        alt="loading.."
        className="round-img"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </React.Fragment>
  );
}
