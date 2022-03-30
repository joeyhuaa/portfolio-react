import React from "react";
import "./FooterStrip.sass";

class FooterStrip extends React.Component {
  render() {
    return (
      <div className="footer-strip">
        <div className="st-container poppinssemibold-regular-semi-bold-black-13px">
          <p className="copyright-stylestyle2tagui_s">© 2020 Mockup.&nbsp;&nbsp;All Rights Reserved.</p>
          <div className="privacy-policy-stylestyle2tagui_s">Privacy Policy</div>
          <div className="terms-of-service-st">Terms of Service</div>
        </div>
      </div>
    );
  }
}

export default FooterStrip;
