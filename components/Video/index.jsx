import React from "react";
import "./Video.sass";

class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <div className="h6-tagh4-2 poppins-bold-old-lace-32px">Product Spotlight</div>
        <p className="h6-3 poppins-medium-old-lace-16px">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
        </p>
        <div className="circle-button-sizela-1">
          <div className="icon-iconfeatherplay">
            <div className="icon-7">
              <img
                className="x94de9112-46f0-4b8b-a4d7-36be86602109"
                src="/img/e5b5c0f0-0dc3-4718-a366-755de7e05038@1x.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
