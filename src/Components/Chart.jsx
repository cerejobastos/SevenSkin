import { useContext, useState } from "react";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Legend,
} from "recharts";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "./BaseComponent";

export function Chart({ data, size }) {
  const theme = useContext(ThemeContext);
  const { primary, error, success, grey, white, darkGrey } = theme.palette;

  const [switches, setSwitches] = useState({
    minimum: true,
    maximum: true,
    meanAverage: true,
  });
  const { minimum, maximum, meanAverage } = switches;

  function filledData() {
    const newData = JSON.parse(JSON.stringify(data));

    newData.forEach((item) => {
      item.dateTime = `${item.dateTime.substring(5, 10)}`;
    });

    return newData;
  }

  function handleSwitch(e) {
    const { name, checked } = e.target;

    setSwitches((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  }

  function renderLegend() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Object.keys(switches).map((dataKey, index) => {
          const name = Object.keys(switches)[index];
          const value = Object.values(switches)[index];

          const color = Object.keys(theme.palette)[index];
          const textColor = Object.values(theme.palette)[index];

          return (
            <div
              key={dataKey}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: 10,
              }}
            >
              <Switch
                name={name}
                checked={value}
                onChange={handleSwitch}
                color={`${color}`}
                size="small"
              />
              <span style={{ color: textColor.main }}>{dataKey}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <ResponsiveContainer aspect={size.width / size.height}>
        <LineChart
          data={filledData()}
          margin={{ top: 30, right: 30 }}
          style={{ backgroundColor: grey.main }}
        >
          {minimum && (
            <Line type="monotone" dataKey="minimum" stroke={primary.main} />
          )}
          {maximum && (
            <Line type="monotone" dataKey="maximum" stroke={error.main} />
          )}
          {meanAverage && (
            <Line type="monotone" dataKey="meanAverage" stroke={success.main} />
          )}
          <XAxis dataKey="dateTime" stroke={darkGrey.main} />
          <YAxis domain={[0, 200]} tickCount={50} stroke={darkGrey.main} />
          <CartesianGrid stroke={white.main} strokeDasharray="5 5" />
          <Tooltip wrapperStyle={{ backgroundColor: grey.main }} />
          <Legend content={renderLegend} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
