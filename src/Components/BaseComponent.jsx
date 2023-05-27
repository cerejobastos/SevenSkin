import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blue, green, red } from "@mui/material/colors";
import { fetchHeartRateData } from "../Actions/HeartRate.Actions";
import { Table, Chart, Dropdown } from "./";

const theme = {
  palette: {
    primary: { main: blue[500] },
    error: { main: red[500] },
    success: { main: green[500] },
    white: { main: "#fff" },
    grey: { main: "#ddd" },
    darkGrey: { main: "#444" },
  },
};

export const ThemeContext = createContext();

export const BaseComponent = () => {
  const [visibleComponent, setVisibleComponent] = useState({
    label: "Chart",
    value: "chart",
  });
  const [size, setSize] = useState(getSize());

  const dispatch = useDispatch();
  const { heartRateData } = useSelector((state) => state.heartRate);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    function handleResize() {
      setSize(getSize());
    }
    dispatch(fetchHeartRateData());

    return () => window.removeEventListener("resize", handleResize, false);
  }, [dispatch]);

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  function handleChange(selected) {
    setVisibleComponent(selected);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          margin: "0 auto",
          marginBottom: "10%",
          maxWidth: size.width * 0.95,
          maxHeight: size.height * 0.9,
        }}
      >
        <div className="topContainer">
          <div className="heartContainer">
            <div className="heart"></div>
          </div>
          <h1 className="title">Monitor your heart rate. Stay healthy!</h1>
          <Dropdown
            placeHolder="Chart"
            isSearchable
            options={[
              { label: "Chart", value: "chart" },
              { label: "Table", value: "table" },
            ]}
            onChange={handleChange}
          />
        </div>
        {visibleComponent.value === "chart" && (
          <Chart data={heartRateData} size={size} />
        )}
        {visibleComponent.value === "table" && <Table size={size} />}
      </div>
    </ThemeContext.Provider>
  );
};
