import React from "react";
import logo from '../assets/chopstick.png'
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-36 footer footer-center p-10 bg-amber-500 text-primary-content">
      <div>
        <div className="w-28">
            <img src={logo} alt="" />
        </div>
        <p className="font-bold">
          Spreading Love and Joy through our delicious recipes
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="text-xl grid grid-flow-col gap-4">
          <a>
            <FaTwitter/>
          </a>
          <a>
            <FaFacebookSquare/>
          </a>
          <a>
            <FaYoutube/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
