// @ts-check
import React, { useState } from "react";
import "./IntervalSlider.css";

export function IntervalSlider({ onValue }) {
  const [value, setValue] = useState(2200);

  const handleChange = (e) => {
    setValue(e.target.value);
    onValue(value);
  };

  return (
    <div className="container">
      <label htmlFor="slider" className="label">
        Cambiar cada {value}ms
      </label>
      <input
        className="slider"
        id="slider"
        type="range"
        min="200"
        max="2200"
        step="400"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
