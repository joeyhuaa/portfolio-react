import React from "react";
import styled from "styled-components";
import { PoppinsMediumOldLace16px, PoppinsNormalWhite16px, PoppinsMediumBlack16px } from "../../styledMixins";


class ImageBlock extends React.Component {
  render() {
    const { imageAssetSmallSizeDefaultStateDefa, className } = this.props;

    return (
      <ImageBlock1 className={`image-block ${className || ""}`}>
        <ImageASSETsmallSIZEDefaultSTATEDEFA
          className="image-assetsmallsize-defaultstatedefault"
          style={{ backgroundImage: `url(${imageAssetSmallSizeDefaultStateDefa})` }}
        ></ImageASSETsmallSIZEDefaultSTATEDEFA>
        <H6 className="h6-1">Lorem Ipsum Dolor</H6>
        <H6TAGP className="h6-tagp-3">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </H6TAGP>
        <ButtonDISPLAYELEMENTSLabelSIZEMEDIU className="button-display_eleme-3">
          <Label className="label-8">Read More</Label>
        </ButtonDISPLAYELEMENTSLabelSIZEMEDIU>
      </ImageBlock1>
    );
  }
}

const ImageBlock1 = styled.div`
  width: 346px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 470px;

  &.image-block.image-block-1 {
    margin-top: 63px;
    margin-bottom: unset;
  }

  &.image-block.image-block-2 {
    margin-left: 22px;
  }
`;

const ImageASSETsmallSIZEDefaultSTATEDEFA = styled.div`
  width: 344px;
  height: 234px;
  margin-right: 2px;
  background-size: cover;
  background-position: 50% 50%;
`;

const H6 = styled.div`
  ${PoppinsMediumOldLace16px}
  min-height: 25px;
  margin-top: 34px;
  min-width: 154px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
`;

const H6TAGP = styled.p`
  ${PoppinsNormalWhite16px}
  width: 346px;
  height: 77px;
  margin-top: 18px;
  text-align: center;
  letter-spacing: -0.16px;
  line-height: 25px;
`;

const ButtonDISPLAYELEMENTSLabelSIZEMEDIU = styled.div`
  height: 48px;
  margin-top: 34px;
  margin-right: 2px;
  display: flex;
  padding: 9.5px 35px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 160px;
  background-color: var(--beeswax);
  border-radius: 30px;
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

export default ImageBlock;
