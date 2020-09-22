// @ts-check
import React from "react";
import "./Light.css";

export function Light({ on, color }) {
  const styles = {
    backgroundColor: color,
    boxShadow: on ? `0px 0px 20px 10px ${color}` : "unset",
    opacity: on ? 1 : 0.5,
  };

  return <div className="light" style={styles}></div>;
}
