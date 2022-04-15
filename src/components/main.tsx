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
        padding: "30px 5vw",
      }}
    >
      <div className="main-element">
        <div className="we">
          <div className="we-img"></div>
          <div>
            <h1 style={{textAlign: 'center'}}>Who we are?</h1>
            <p>
              Founded in 2019, we are inspired by helping people to be their
              better version, and do what they love. With MPLIFY Vietnam, we
              create digital solutions for people engagement that enables,
              facilitates and maximizes people experience.
            </p>
            <p><b>What we can help?</b></p>
            <ul>
              <li>Smart event engagement solutions.</li>
              <li>Self-customized smart event solution.</li>
              <li>Integrated smart event solution into your current apps.</li>
              <li>Events consulting and onsite support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-element">
        <h1>Our Core Value</h1>
        <div className="value">
          <div className="value-element">
            <p>
              <b>courage</b>
            </p>
            <p>
              We continuously strive for excellence, more innovate, and
              sustainable solutions to maximize people experience and self
              development.
            </p>
          </div>
          <div className="value-element">
            <p>
              <b>simplicity</b>
            </p>
            <p>
              We aim to provide an effortless, appealing product through
              technology in various digital applications.
            </p>
          </div>
          <div className="value-element">
            <p>
              <b>curiosity</b>
            </p>
            <p>
              We aspire to look deeper in everything with compassion and
              kindness in order to bring more values to people around us
            </p>
          </div>
        </div>
      </div>
      <div className="main-element">
        <h1>Our Products</h1>
        <div className="product">
          <div className='product-image'></div>
          <div className="product-main">
            <p>
              <b></b>
            </p>
            <p>
              mplify Events is all-in-one digital solution for events, that
              makes all events easier, more attractive and engaging by
              connecting and engaging people. It also creates an unique digital
              event experience.
            </p>
            <button className="button" id="product-button">
              More Info
            </button>
          </div>
        </div>
      </div>
      <div className="main-element">
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
              <input
                type="submit"
                value="Submit"
                className="button"
                id="contact-button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
