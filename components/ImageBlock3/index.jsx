import React from "react";
import "./ImageBlock3.sass";

function ImageBlock3(props) {
  const { imageAssetSmallSizeDefaultStateDefa, className } = props;

  return (
    <div className={`image-block-6 ${className || ""}`}>
      <div
        className="image-assetsmallsize-defaultstatedefault-2"
        style={{ backgroundImage: `url(${imageAssetSmallSizeDefaultStateDefa})` }}
      ></div>
      <div className="h6-9 poppins-medium-old-lace-11px">Lorem Ipsum Dolor</div>
      <p className="h6-tagp-5 poppins-normal-white-16px">
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="button-display_eleme-16">
        <div className="label-24 poppins-medium-black-12px">Read More</div>
      </div>
    </div>
  );
}

export default ImageBlock3;
