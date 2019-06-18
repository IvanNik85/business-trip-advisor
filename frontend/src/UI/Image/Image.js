import React from "react";
import "./Image.scss";
export default function Image(props) {
  const { img, title, width, height } = props;
  return (
    <div>
      <h1>Slika</h1>
      <img href={img} alt={title} width={width} height={height} />
    </div>
  );
}
