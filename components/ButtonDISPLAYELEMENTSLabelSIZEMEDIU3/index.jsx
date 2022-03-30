import React from "react";
import "./ButtonDISPLAYELEMENTSLabelSIZEMEDIU3.sass";

class ButtonDISPLAYELEMENTSLabelSIZEMEDIU3 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`button-display_eleme-12 ${className || ""}`}>
        <div className="label-18 poppins-medium-black-15px">Read More</div>
      </div>
    );
  }
}

export default ButtonDISPLAYELEMENTSLabelSIZEMEDIU3;
