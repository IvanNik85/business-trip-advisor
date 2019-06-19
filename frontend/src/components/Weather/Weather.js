import React from "react";
import Skycons from "skycons-component";
import "./Weather.scss";

export default function Weather(props) {
  const { summary, icon, temperature } = props;
  const temp = Math.round(temperature);
  return (
    <div className="weatherFlex">
      <h4>{summary}</h4>
      <Skycons
        icon={icon}
        animate={false}
        iconColor={"white"}
        style={{ width: 64, height: 64 }}
      />
      <p className="temp">{temp} &#8451;</p>
    </div>
  );
}
