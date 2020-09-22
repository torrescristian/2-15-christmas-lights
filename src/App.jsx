// @ts-check
import React, { useEffect, useState } from "react";
import "./App.css";
import { IntervalSlider } from "./components/IntervalSlider/IntervalSlider";
import { Light } from "./components/Light/Light";

function App() {
  const [lights, setLights] = useState(initialLights());
  const [suspension, setSuspension] = useState(2200);
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (!run) {
      return;
    }

    setTimeout(() => {
      const newLights = lights.map((l) => ({
        ...l,
        on: !l.on,
      }));

      setLights(newLights);
    }, suspension);
  }, [lights, suspension, run]);

  return (
    <div className="app">
      <div className="lights-container">
        {lights.map((light, i) => (
          <Light key={i} color={light.color} on={light.on} />
        ))}
      </div>
      <IntervalSlider onValue={setSuspension} />
      <button
        className="button"
        style={{ backgroundColor: run ? "tomato" : "mediumseagreen" }}
        onClick={() => setRun(!run)}
      >
        {run ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default App;

function initialLights() {
  return [
    {
      color: "tomato",
      on: true,
    },
    {
      color: "mediumspringgreen",
      on: false,
    },
    {
      color: "yellow",
      on: true,
    },
    {
      color: "blue",
      on: false,
    },
    {
      color: "purple",
      on: true,
    },
    {
      color: "orange",
      on: false,
    },
    {
      color: "deepskyblue",
      on: true,
    },
  ];
}
