import React from "react";
import PropTypes from "prop-types";

const Footer = (props: any) => {
  return (
    <div>
      <div className="footer-1">
        <div className="footer-1-a">
        </div>
        <div className="footer-1-b">
          <div className="logo li"></div>
          <div className="logo fb"></div>
          <div className="logo in"></div>
        </div>
      </div>
      <div className="footer-2">
        <span>MPLIFY VIETNAM COMPANY LIMITED. </span>
        <span>All right reserved.</span>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
