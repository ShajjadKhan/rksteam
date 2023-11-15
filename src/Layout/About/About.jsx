import React from "react";
import Title from "./../../components/Title/Title";
import Button from "./../../components/Button/Button";
import AboutContent from "../../components/AboutContent/AboutContent";
import AboutImg from "../../components/AboutImg/AboutImg";
import branding from '../../assets/brand 1.png';
import ShortService from "../../components/ShortService/ShortService";
import ShortServices from "../../components/ShortServices/ShortServices";
import banner from '../../assets/banner.png';
const About = () => {
  
  return (
    <div className="mt-10">
      <div className="container">
        <div className="titlebar">
          <Title
            title="About Our"
            subtitle="Team"
            description="5+ Years Working Experience"
          ></Title>
        </div>

        <div className="row flex flex-col lg:flex-row justify-between items-center mt-16">
          <AboutContent></AboutContent>
          <AboutImg attr={banner}></AboutImg>
        </div>

        <div className="row flex flex-col lg:flex-row justify-between items-center mt-0 lg:mt-28 gap-10">
          <AboutImg attr={banner}></AboutImg>
          <div className="whatwedo-content w-full lg:w-[50%] pb-5">
            <div className="what-we-do-text ">
            <h1 className="text-4xl font-bold ">
              <span className="primary-text">What We</span> Do?
            </h1>
            <p className="text-3xl mt-3">Make Your Dream App With Us.</p>
            </div>
            <div className="short-services mt-10 lg:mt-0">
              <ShortServices className='flex flex-col gap-5'></ShortServices>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
