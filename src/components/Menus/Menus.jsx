import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from '../../assets/icon/home.png';
import aboutIcon from '../../assets/icon/profile.png';
import contactIcon from '../../assets/icon/phone-call.png';
import portfolioIcon from '../../assets/icon/briefcase.png';
import serviceIcon from '../../assets/icon/24-7.png';
const Menus = ({activemenu}) => {
 
  return (
    <ul className={activemenu? 'menu-animation lg:flex justify-center  items-center lg:gap-10 fixed lg:relative w-[200px] lg:w-[80%] lg:h-0 p-5 gap-10 top-0 left-0 h-screen secondary' : 'lg:flex justify-center items-center lg:gap-10 menubar  p-5 gap-10 menu-animation fixed lg:relative secondary w-[200px] lg:w-[80%] h-screen lg:h-0'}>
      <li className="lg:ml-0 ml-2">
        <img src={homeIcon} alt="homeIcon" />
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="lg:mt-0 mt-8 lg:ml-0 ml-2">
      <img src={aboutIcon} alt="aboutIcon" />
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="lg:mt-0 mt-8 lg:ml-0 ml-2">
      <img src={serviceIcon} alt="serviceIcon" />
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="lg:mt-0 mt-8 lg:ml-0 ml-2">
      <img src={portfolioIcon} alt="portfolioIcon" />
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li className="lg:mt-0 mt-8 lg:ml-0 ml-2">
      <img src={contactIcon} alt="contactIcon" />
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Menus;
