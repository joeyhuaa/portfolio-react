import React from "react";
import "./ContentBlock.sass";

function ContentBlock(props) {
  const { imageAssetSmallSizeDefaultStateDefa, className } = props;

  return (
    <div className={`content-block-14 ${className || ""}`}>
      <div
        className="image-assetsmallsize-defaultstatedefault-4"
        style={{ backgroundImage: `url(${imageAssetSmallSizeDefaultStateDefa})` }}
      ></div>
      <div className="title-tagh5-1 poppins-bold-old-lace-24px">Lorem Ipsum Dolor</div>
      <p className="description-tagp-1 poppins-normal-white-16px">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>
      <div className="button-display_eleme-27">
        <div className="label-34 poppins-medium-black-16px">Read More</div>
      </div>
    </div>
  );
}

export default ContentBlock;
