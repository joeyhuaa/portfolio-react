import React from "react";
import "./ButtonDISPLAYELEMENTSLabelSIZEMEDIU4.sass";

class ButtonDISPLAYELEMENTSLabelSIZEMEDIU4 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`button-display_eleme-18 ${className || ""}`}>
        <div className="label-25 poppins-medium-black-12px">Read More</div>
      </div>
    );
  }
}

export default ButtonDISPLAYELEMENTSLabelSIZEMEDIU4;
