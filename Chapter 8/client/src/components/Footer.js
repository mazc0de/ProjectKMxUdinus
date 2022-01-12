import React from "react";
import "../assets/css/style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row justify-content-center text-center text-white footer-text">
          <div className="col-2">MAIN</div>
          <div className="col-2">ABOUT</div>
          <div className="col-2">GAME FEATURES</div>
          <div className="col-2">SYSTEM REQUIREMENTS</div>
          <div className="col-2">QUOTES</div>
        </div>
        <hr style={{ border: "2px solid white" }} />
        <div className="row text-white text-white footer-text">
          <div className="col-4"> &copy; 2021 Suwit Games, Inc. All Right Reserved.</div>
          <div className="col-8">
            <div className="row text-end text-white">
              <div className="col-4">PRIVACY POLICY</div>
              <div className="col-4">TERM OF SERVICE</div>
              <div className="col-4">CODE OF CONDUCT</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
