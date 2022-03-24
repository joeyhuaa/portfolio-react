import React from "react";
import "./Hero.sass";

function Hero(props) {
  const { hero } = props;

  return (
    <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="lorem-ipsum-dolor-si-1 poppins-bold-beeswax-56px">
        Design is the silent ambassador of your brand
      </div>
      <p className="hero-text poppins-medium-old-lace-16px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div className="button-display_eleme-1">
        <div className="label-3 poppins-medium-black-16px">Contact</div>
      </div>
    </div>
  );
}

export default Hero;
