import React from "react";
import "./TabItemSTATEACTIVE.sass";

class TabItemSTATEACTIVE extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`tab-item-stateactive-1 ${className || ""}`}>
        <div className="overlap-group-11">
          <div className="area-7"></div>
          <div className="label-17 poppins-medium-celeste-14px">{children}</div>
        </div>
      </div>
    );
  }
}

export default TabItemSTATEACTIVE;
