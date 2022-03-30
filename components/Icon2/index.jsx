import React from "react";
import "./Icon2.sass";

class Icon2 extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <div className={`icon-28 ${className || ""}`}>
        <img className="x94de9112-46f0-4b8b-a4d7-36be86602109-2" src={src} />
      </div>
    );
  }
}

export default Icon2;
