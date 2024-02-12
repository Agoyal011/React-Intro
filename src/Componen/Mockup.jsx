import React from "react";

const Mockup = () => {
  return (
    <>
      <div className="Mockup-Nav">
        <div className="mockup-features">
          <img src="./efundrs logo.png" className="logo_mockup" alt="logo" />

          <ul>
            <li>
              <a href="#">Features </a>
            </li>
            <li>
              <a href="#">Our Team </a>
            </li>
            <li>
              <a href="#">Contact Us </a>
            </li>
          </ul>
        </div>

        <div className="mockup-signin">
          <li>
            <a href="#">Sign In </a>
          </li>
          <li>
            <a href="#">Get Started Today </a>
          </li>
        </div>
      </div>

      <div className="mainsec-mockup">
        <p className="mockup-para">
          The first Fundraising Resource Planning Software Platform{" "}
        </p>
        <div className="mockup-heading">
          <h1> Connecting Fundraisers </h1>
          <h1> With Local Suppliers </h1>
        </div>
        <div className="mockup-started-button">
          <sub-heading>
            <a href="#"> Get Started Today</a>
          </sub-heading>
        </div>

        <div className="mockup-span">
          <span>Grow your Community Presence</span>
          <span>Achieve your Funding Targets</span>
        </div>

        <img src="/Mockup-pic.svg"></img>
      </div>
    </>
  );
};

export default Mockup;
