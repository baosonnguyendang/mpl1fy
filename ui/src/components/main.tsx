import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from 'react';
import  Axios  from 'axios';
import Map from "./map";
import swal from 'sweetalert';

import TextField from "@mui/material/TextField";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";

import vector1 from "../img/Vector1.png";
import vector2 from "../img/Vector2.png";
import vector3 from "../img/Vector3.png";
import vector4 from "../img/Vector4.png";
import curiosity from "../img/curiosity.png";
import easy from "../img/easy.png";
import passion from "../img/passion.png";
import arrow from "../img/Vectorr.png"

const Main = (props: any) => {
  const key = "AIzaSyCsxhaM3-9si1YOfppMVlPAn3Wp1Rs7r-s";

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = async (e: any) => { // e --> event
    e.preventDefault()

    try {
      const {data} = await Axios.post('/api', {
        name,
        email,
        message
      })
      console.log(data)
      swal("Successfully sent information!", "Thanks a lot!", "success");
    }catch (err){
      console.log(err)
    }

  }

  const addScroll = (input: string) => {
    document.getElementById(input)!.addEventListener("click", () => {
      //scroll to each part when click to menu bar
      const element = document.getElementById(input.substring(5));
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element!.getBoundingClientRect().top;
      console.log(bodyRect, elementRect);
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      //the code below is to highlight menu bar
      document.getElementsByClassName("chosen")[0].classList.remove("chosen");
      document.getElementById(input)!.classList.add("chosen");
    });
  };

  useEffect(() => {
    Array.from(document.getElementsByClassName("header-menu")).forEach(
      (element: Element) => addScroll(element.id)
    );
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgba(144, 205, 248, 0.2)",
        backgroundImage: `url(${vector3}), url(${vector4})`,
        backgroundPosition: "0 35vh, 100% 101%",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
      className='main'
    >
      <div className="main-element" id="home">
        <img src={arrow} alt='arrow' />
        <div className="slogan">
          <h1>engaging people,</h1>
          <h1>making difference</h1>
        </div>
        <img src={vector2} alt='vector2' id="round-image" />
        <img src={arrow} alt='arrow-down' id="arrow-image" />
      </div>
      <div className="main-element" id="we">
        <div className="we">
          <div className="we-img"></div>
          <div>
            <h1 style={{ textAlign: "center" }}>Who we are?</h1>
            <p>
              Founded in 2019, we are inspired by helping people to be their
              better version, and do what they love. With MPLIFY Vietnam, we
              create digital solutions for people engagement that enables,
              facilitates and maximizes people experience.
            </p>
            <p>
              <b>What we can help?</b>
            </p>
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
            <img src={passion} alt="passion" />
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
            <img src={easy} alt="easy" />
            <p>
              <b>simplicity</b>
            </p>
            <p>
              We aim to provide an effortless, appealing product through
              technology in various digital applications.
            </p>
          </div>
          <div className="value-element">
            <img src={curiosity} alt="curiosity" />
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
      <div className="main-element" id="product">
        <h1>Our Products</h1>
        <div className="product">
          <div className="product-image"></div>
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
      <div className="main-element" id="contact">
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
            <form onSubmit={submitHandler}>
              <TextField label="Full Name" variant="standard" fullWidth onChange={(e) => setName(e.target.value)}/>
              <br />
              <TextField
                label="Your Email"
                variant="standard"
                fullWidth
                style={{ margin: "10px 0" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <TextField label="Your Message" variant="standard" fullWidth onChange={(e) => setMessage(e.target.value)}/>
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