import React from "react";
import "./ContentBlock22.sass";

function ContentBlock22(props) {
  const { imageAssetSmallSizeDefaultStateDefa, className } = props;

  return (
    <div className={`content-block-8 ${className || ""}`}>
      <div
        className="image-assetsmallsize-defaultstatedefault-3"
        style={{ backgroundImage: `url(${imageAssetSmallSizeDefaultStateDefa})` }}
      ></div>
      <div className="title-tagh5 poppins-bold-old-lace-35px">Lorem Ipsum Dolor</div>
      <p className="description-tagp poppins-normal-white-16px">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
      </p>
      <div className="button-display_eleme-23">
        <div className="label-30 poppins-medium-black-29px">Read More</div>
      </div>
    </div>
  );
}

export default ContentBlock22;
