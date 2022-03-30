import React from "react";
import "./ButtonDISPLAYELEMENTSLabelSIZEMEDIU2.sass";

class ButtonDISPLAYELEMENTSLabelSIZEMEDIU2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`button-display_eleme-5 ${className || ""}`}>
        <div className="label-8 poppins-medium-black-16px">Read More</div>
      </div>
    );
  }
}

export default ButtonDISPLAYELEMENTSLabelSIZEMEDIU2;
