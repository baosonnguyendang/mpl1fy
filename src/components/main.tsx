import React from "react";
import PropTypes from "prop-types";

import Map from "./map";

import TextField from "@mui/material/TextField";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";

const Main = (props: any) => {
  const key = "AIzaSyCsxhaM3-9si1YOfppMVlPAn3Wp1Rs7r-s";

  return (
    <div
      style={{
        backgroundColor: "rgba(93, 142, 247, 0.2)",
        padding: "30px 50px",
        margin: "20px 0",
      }}
    >
      <div>
        <h1>Contact us</h1>
        <div className="contact">
          <div className="contact-info">
            <p>
              <b>Contact information</b>
            </p>
            <div className="contact-info-data">
              <CallIcon />
              <p>(+84) 909 234 068</p>
            </div>
            <div className="contact-info-data">
              <MailIcon />
              <p>contact@mplify.vn or support@mplifyEvents.com</p>
            </div>
            <div className="contact-info-data">
              <RoomIcon />
              <p>
                2-4 Alexandre de Rhodes, District 1, Ho Chi Minh City, Vietnam
              </p>
            </div>
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    height: `320px`,
                    margin: `auto`,
                    border: "2px solid black",
                  }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
            ></Map>
          </div>
          <div className="contact-message">
            <p>
              <b>Leave a message</b>
            </p>
            <form>
              <TextField label="Full Name" variant="standard" fullWidth />
              <br />
              <TextField
                label="Your Email"
                variant="standard"
                fullWidth
                style={{ margin: "10px 0" }}
              />
              <br />
              <TextField label="Your Message" variant="standard" fullWidth />
              <br />
              <input type="submit" value="Submit" id="contact-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
