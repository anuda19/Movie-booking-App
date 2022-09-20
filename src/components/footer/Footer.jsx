import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-dark text-light footer">
      <h3 
        onClick={() => {
          navigate("/");
        }}
      >
        SHOW TIME
      </h3>
      <hr />
      <div className="social_icons">
        <span className="icon_item">
          <FaFacebook />
        </span>
        <span className="icon_item">
          <AiFillTwitterCircle />
        </span>
        <span className="icon_item">
          <FaInstagram />
        </span>
        <span className="icon_item">
          <FaYoutube />
        </span>
        <span className="icon_item">
          <FaLinkedin />
        </span>
      </div>
      <div className="my-auto p-2">
        Copyright 2022, &copy; SHOW TIME Entertainment Pvt. Ltd. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
