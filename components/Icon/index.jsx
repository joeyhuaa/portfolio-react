import React from "react";
import "./Icon.sass";

function Icon(props) {
  const { src, className } = props;

  return (
    <div className={`icon-18 ${className || ""}`}>
      <img className="x94de9112-46f0-4b8b-a4d7-36be86602109-1" src={src} />
    </div>
  );
}

export default Icon;
