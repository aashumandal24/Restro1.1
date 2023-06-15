import React, { useState } from "react";
import images from "../../constants/images";
import "./ExNavbar.css";
import { Link } from "react-router-dom";

const ExNavbar = () => {
  return (
    <>
      <div className="app__exnavbar">
        <div className="app__exnavbar-img">
          <Link to="/">
            <img src={images.home} alt="home_img" />
          </Link>
        </div>
        <div className="app__exnav">
          <div className="app__exnavbar-logo">
            <img src={images.gericht} alt="app__logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExNavbar;
