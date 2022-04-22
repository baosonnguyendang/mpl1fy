import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";

import MenuIcon from "@mui/icons-material/Menu";

import logo from "../img/logo_mplify_vietnam-blue.png";
import { SettingsPowerRounded } from "@mui/icons-material";

const Header = (props: any) => {
  const [toggleOn, setToggleOn] = useState(false);
  const [lang, setLang] = useState("vi");
  var path = useLocation().pathname;

  useEffect(() => {
    switch (path) {
      case '/about':
        document.getElementsByClassName('header-menu')[1].classList.add('chosen');
        break;
      case '/products':
        document.getElementsByClassName('header-menu')[2].classList.add('chosen');
        break;
      case '/contact':
        document.getElementsByClassName('header-menu')[3].classList.add('chosen');
        break;
      default:
        document
          .getElementsByClassName("header-menu")[0]
          .classList.add("chosen");
    }
    let scrollPos = window.scrollY
    const height1 = document.getElementById("we")!.getBoundingClientRect().top + scrollPos -71
    const height2 = document.getElementById("product")!.getBoundingClientRect().top + scrollPos -71
    const height3 = document.getElementById("contact")!.getBoundingClientRect().top + scrollPos -71
    window.addEventListener('scroll', function(){
      const scrollPos = this.window.scrollY
      document.getElementsByClassName("chosen")[0].classList.remove("chosen")
      if (scrollPos >= height1 && scrollPos <height2){
        document.getElementById("menu-we")!.classList.add("chosen")
      }else if(scrollPos >= height2 && scrollPos <height3){
        document.getElementById("menu-product")!.classList.add("chosen")
      }else if(scrollPos >= height3){
        document.getElementById("menu-contact")!.classList.add("chosen")
      }else{
        document.getElementById("menu-home")!.classList.add("chosen")
      }
    })
  }, []);
  const [open, setOpen] = useState<boolean>(false)
  const triggerMenuOpen = ()=>{
    setOpen(open => !open)
  }
  useEffect(()=>{
    if(open){
      document.querySelector('.header-right')!.classList.add("header-menu-mobile")
    }else{
      document.querySelector('.header-right')!.classList.remove('header-menu-mobile')
    }
  },[open])

  const toggle = (e: any) => {
    setToggleOn((toggleOn) => !toggleOn);
  };

  const changeLanguage = (lang: string) => {
    setLang(lang);
    setToggleOn(false);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="logo" />
      </div>
      <MenuIcon id="header-menu-icon" onClick ={()=> triggerMenuOpen()} />
      <div className="header-right">
        <div className="header-menu" id="menu-home">
          <span>Home</span>
        </div>
        <div className="header-menu" id="menu-we">
          About Us
        </div>
        <div className="header-menu" id="menu-product">
          Our Products
        </div>
        <div className="header-menu" id="menu-contact">
          Contact Us
        </div>
        <div className="header-select">
          <div onClick={toggle}>
            {lang === "vi" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <mask id="a">
                  <circle cx="256" cy="256" r="256" fill="#fff" />
                </mask>
                <g mask="url(#a)">
                  <path fill="#d80027" d="M0 0h512v512H0z" />
                  <path
                    fill="#ffda44"
                    d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"
                  />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <mask id="a">
                  <circle cx="256" cy="256" r="256" fill="#fff" />
                </mask>
                <g mask="url(#a)">
                  <path
                    fill="#eee"
                    d="M0 0h47.4l76.4 21 65.4-21h33.4l34.2 16.6L289.4 0h33.4l70.4 22.8L464.8 0h15.8l12.2 7.3L512 0v47.3l-19.9 78 19.9 63.9v33.4l-16.4 30.6 16.4 36.2v33.4l-15.1 68.7 15.1 73.3v15.9l-7.8 10.9L512 512h-47.3l-71-17.5-70.9 17.5h-33.4l-30-19.7-36.8 19.7h-33.3l-63.7-20.2L47.3 512H31.4l-10.6-8L0 512v-47.3l22.8-79L0 322.9v-33.4l25.3-32L0 222.6v-33.4l22.2-64.6L0 47.2V31.4l8-7.8z"
                  />
                  <path
                    fill="#0052b4"
                    d="m47.4 0 141.8 142V0H47.4zm275.4 0v142l142-142h-142zM0 47.2v142h142L0 47.2zm512 .1L370.1 189.2H512V47.3zM0 322.8v141.9l141.9-141.9H0zm370 0 142 142v-142H370zM189.3 370l-142 142h142V370zm133.5.1V512h141.9L322.8 370.1z"
                  />
                  <path
                    fill="#d80027"
                    d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0h-66.8z"
                  />
                  <path
                    fill="#d80027"
                    d="M0 0v31.4l157.7 157.8h31.5L0 0zm480.6 0L322.8 157.7v31.5L512 0h-31.4zM189.2 322.8 0 512h31.4l157.8-157.7v-31.5zm133.6 0L511.9 512h.1v-31.3L354.3 322.8h-31.5z"
                  />
                </g>
              </svg>
            )}
            <div className="chevron"></div>
          </div>
          {toggleOn && (
            <div className="header-options">
              <div onClick={() => changeLanguage("en")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <mask id="a">
                    <circle cx="256" cy="256" r="256" fill="#fff" />
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fill="#eee"
                      d="M0 0h47.4l76.4 21 65.4-21h33.4l34.2 16.6L289.4 0h33.4l70.4 22.8L464.8 0h15.8l12.2 7.3L512 0v47.3l-19.9 78 19.9 63.9v33.4l-16.4 30.6 16.4 36.2v33.4l-15.1 68.7 15.1 73.3v15.9l-7.8 10.9L512 512h-47.3l-71-17.5-70.9 17.5h-33.4l-30-19.7-36.8 19.7h-33.3l-63.7-20.2L47.3 512H31.4l-10.6-8L0 512v-47.3l22.8-79L0 322.9v-33.4l25.3-32L0 222.6v-33.4l22.2-64.6L0 47.2V31.4l8-7.8z"
                    />
                    <path
                      fill="#0052b4"
                      d="m47.4 0 141.8 142V0H47.4zm275.4 0v142l142-142h-142zM0 47.2v142h142L0 47.2zm512 .1L370.1 189.2H512V47.3zM0 322.8v141.9l141.9-141.9H0zm370 0 142 142v-142H370zM189.3 370l-142 142h142V370zm133.5.1V512h141.9L322.8 370.1z"
                    />
                    <path
                      fill="#d80027"
                      d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0h-66.8z"
                    />
                    <path
                      fill="#d80027"
                      d="M0 0v31.4l157.7 157.8h31.5L0 0zm480.6 0L322.8 157.7v31.5L512 0h-31.4zM189.2 322.8 0 512h31.4l157.8-157.7v-31.5zm133.6 0L511.9 512h.1v-31.3L354.3 322.8h-31.5z"
                    />
                  </g>
                </svg>

                <span style={{ width: "0.45rem" }}>EN</span>
              </div>
              <div onClick={() => changeLanguage("vi")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <mask id="a">
                    <circle cx="256" cy="256" r="256" fill="#fff" />
                  </mask>
                  <g mask="url(#a)">
                    <path fill="#d80027" d="M0 0h512v512H0z" />
                    <path
                      fill="#ffda44"
                      d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"
                    />
                  </g>
                </svg>

                <span style={{ width: "0.45rem" }}>VI</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Header.propTypes = {

// };

export default Header;