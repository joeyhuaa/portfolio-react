import React from "react";
import "./ImageBlock2.sass";

function ImageBlock2(props) {
  const { imageAssetSmallSizeDefaultStateDefa, className } = props;

  return (
    <div className={`image-block-3 ${className || ""}`}>
      <div
        className="image-assetsmallsize-defaultstatedefault-1"
        style={{ backgroundImage: `url(${imageAssetSmallSizeDefaultStateDefa})` }}
      ></div>
      <div className="h6-5 poppins-medium-old-lace-15px">Lorem Ipsum Dolor</div>
      <p className="h6-tagp-3 poppins-normal-white-16px">
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="button-display_eleme-10">
        <div className="label-16 poppins-medium-black-15px">Read More</div>
      </div>
    </div>
  );
}

export default ImageBlock2;
