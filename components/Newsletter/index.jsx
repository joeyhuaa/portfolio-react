import React from "react";
import "./Newsletter.sass";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="newsletter">
        <div className="newsletter-tagh4 poppins-bold-old-lace-32px">Newsletter</div>
        <p className="duis-aute-irure-dolo poppins-medium-old-lace-16px">
          Duis aute irure dolor in reprehenderit in voluptate velit.
        </p>
        <div className="display_elements-container">
          <div className="input-display_elemen">
            <div className="value poppins-medium-black-16px">Your email</div>
          </div>
          <div className="button-display_eleme-6">
            <div className="label-10 poppins-medium-black-16px">Subscribe</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
