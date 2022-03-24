import React from "react";
import styled from "styled-components";
import { PoppinsMediumBlack16px } from "../../styledMixins";


class ButtonDISPLAYELEMENTSLabelSIZEMEDIU extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ButtonDISPLAYELEMENTSLabelSIZEMEDIU1 className={`button-display_eleme-4 ${className || ""}`}>
        <Label className="label-9">Read More</Label>
      </ButtonDISPLAYELEMENTSLabelSIZEMEDIU1>
    );
  }
}

const ButtonDISPLAYELEMENTSLabelSIZEMEDIU1 = styled.div`
  height: 48px;
  margin-top: 32px;
  display: flex;
  padding: 9.5px 27px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 144px;
  background-color: var(--beeswax);
  border-radius: 30px;

  &.button-display_eleme-4.button-display_eleme-5 {
    margin-top: 50px;
    margin-right: 2px;
  }

  &.button-display_eleme-4.button-display_eleme-6 {
    margin-top: 50px;
    margin-right: 2px;
  }

  &.button-display_eleme-4.button-display_eleme-7 {
    margin-top: 50px;
    margin-right: 2px;
  }
`;

const Label = styled.div`
  ${PoppinsMediumBlack16px}
  min-height: 25px;
  min-width: 88px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default ButtonDISPLAYELEMENTSLabelSIZEMEDIU;
