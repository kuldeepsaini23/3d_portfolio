import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";

import AllSocialMedia from "./AllSocialMedia";
import { client, urlFor } from "../client";

import { BsTwitter, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    const query = '*[_type == "navbar"]';

    client.fetch(query).then((data) => {
      setNavbar(data);
    });
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-5 h-5 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Diago &nbsp;
            <span className="sm:block hidden">| Video Editor</span>
          </p>
        </Link>

        <div className="flex flex-row gap-5 items-center justify-center">
        

          <ul className="list-none hidden sp:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-7 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-popins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    // !After clicking on link the menu shoul close
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
