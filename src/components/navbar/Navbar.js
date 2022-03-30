import React from 'react';
import './Navbar.css';

const Navbar = ({ isScrolling }) => {
  // const toTheTop = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // };

  return (
    <div class="header">
      <div class="title-tagh6">Mockup Company</div>
      <div class="tabs">
        <a href="#tab-item5">
          <div class="tab-item5" id="tab-item5">
            <div class="overlap-group">
              <div class="area">
                {/* <img class="bar" src="bar.png" /> */}
              </div>
              <div class="labelnotosans-semi-bold-masala-16px">Label</div>
            </div>
          </div>
        </a>
        <a href="#tab-item4">
          <div class="tab-item" id="tab-item4">
            <div class="overlap-group">
              <div class="area">
                <div class="bar-1"></div>
              </div>
              <div class="labelnotosans-semi-bold-masala-16px">Label</div>
            </div>
          </div>
        </a>
        <a href="#tab-item3">
          <div class="tab-item" id="tab-item3">
            <div class="overlap-group">
              <div class="area">
                <div class="bar-2"></div>
              </div>
              <div class="labelnotosans-semi-bold-masala-16px">Label</div>
            </div>
          </div>
        </a>
        <a href="#tab-item2">
          <div class="tab-item" id="tab-item2">
            <div class="overlap-group">
              <div class="area">
                <div class="bar-3"></div>
              </div>
              <div class="labelnotosans-semi-bold-masala-16px">Label</div>
            </div>
          </div>
        </a>
        <a href="#tab-item1">
          <div class="tab-item" id="tab-item1">
            <div class="overlap-group">
              <div class="area">
                <div class="bar-4"></div>
              </div>
              <div class="labelnotosans-semi-bold-masala-16px">Label</div>
            </div>
          </div>
        </a>
        <a href="#tab-item">
          <div class="tab-item" id="tab-item">
            <div class="overlap-group">
              <div class="area">
                <div class="bar-5"></div>
              </div>
              <div class="labelnotosans-semi-bold-masala-16px">Label</div>
            </div>
          </div>
        </a>
      </div>
      <div class="log-in-button">
        <div class="label-2">Log in</div>
        <div class="icon-3">
          <div class="icon-4"></div>
        </div>
      </div>
      <div class="sign-up-button">
        <div class="label-3">Get Started</div>
        <div class="icon-5"></div>
      </div>
    </div>
  );
};

export default Navbar;
