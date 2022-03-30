import React from "react";
import "./ImageBlock.sass";

class ImageBlock extends React.Component {
  render() {
    const { imageAssetSmallSizeDefaultStateDefa, className } = this.props;

    return (
      <div className={`image-block ${className || ""}`}>
        <div
          className="image-assetsmallsize-defaultstatedefault"
          style={{ backgroundImage: `url(${imageAssetSmallSizeDefaultStateDefa})` }}
        ></div>
        <div className="h6 poppins-medium-old-lace-16px">Lorem Ipsum Dolor</div>
        <p className="h6-tagp-1 poppins-normal-white-16px">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="button-display_eleme">
          <div className="label-2 poppins-medium-black-16px">Read More</div>
        </div>
      </div>
    );
  }
}

export default ImageBlock;
