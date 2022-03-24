import React from "react";
import ImageBlock from "../ImageBlock";
import "./FeaturedContent.sass";

function FeaturedContent(props) {
  const { imageBlock1Props, imageBlock2Props, imageBlock3Props } = props;

  return (
    <div className="featured-content">
      <ImageBlock imageAssetSmallSizeDefaultStateDefa={imageBlock1Props.imageAssetSmallSizeDefaultStateDefa} />
      <div className="flex-col-1">
        <div className="h6-tagh4-1 poppins-bold-old-lace-32px">Featured Products</div>
        <img className="line-1" src="/img/line-1@1x.png" />
        <ImageBlock
          imageAssetSmallSizeDefaultStateDefa={imageBlock2Props.imageAssetSmallSizeDefaultStateDefa}
          className={imageBlock2Props.className}
        />
      </div>
      <ImageBlock
        imageAssetSmallSizeDefaultStateDefa={imageBlock3Props.imageAssetSmallSizeDefaultStateDefa}
        className={imageBlock3Props.className}
      />
    </div>
  );
}

export default FeaturedContent;
