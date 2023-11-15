import React from "react";
import { Helmet } from "react-helmet-async";
import banner from "../../assets/banner.png";
import HomeContent from "../../components/Homecontent/HomeContent";
import ShortService from "../../components/ShortService/ShortService";
import Title from "../../components/Title/Title";
import TeamCard from "../../components/TeamCard/TeamCard";
import ChooseUs from "../../components/ChooseUs/ChooseUs";

import gallery from "../../assets/gallery.webp";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import ShortServices from "../../components/ShortServices/ShortServices";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Rks Team || Home Page</title>
      </Helmet>
      <div className="container">
        <div className="home-section">
          <div className="row flex justify-between items-center h-full gap-10 lg:gap-0 lg:h-[85vh] flex-col lg:flex-row">
            <HomeContent></HomeContent>
            <div className="home-banner mt-2 w-full lg:w-1/2 lg:mt-0">
              <img src={banner} alt="Banner" />
            </div>
          </div>
        </div>
     
        <ShortServices className='shortservice pb-10 mt-10 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'></ShortServices>


        <section className="section expert-section">
          <Title
            title="Team Of"
            subtitle="Experts"
            description="We stand at the forefront of web development trends and technologies, constantly evolving our skills to deliver innovative solutions"
          ></Title>
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
            <TeamCard
              teamDes="Our mission at Rks Team is simple yet profound: to turn your ideas into remarkable, functional websites and web applications. We firmly believe in the power of the web to connect"
              teamName="Rakib Khan Shamim"
              teamDesignation="Founder, CEO"
            ></TeamCard>
            <TeamCard
              teamDes="Our mission at Rks Team is simple yet profound: to turn your ideas into remarkable, functional websites and web applications. We firmly believe in the power of the web to connect"
              teamName="Rakib Khan Shamim"
              teamDesignation="Founder, CEO"
            ></TeamCard>
            <TeamCard
              teamDes="Our mission at Rks Team is simple yet profound: to turn your ideas into remarkable, functional websites and web applications. We firmly believe in the power of the web to connect"
              teamName="Rakib Khan Shamim"
              teamDesignation="Founder, CEO"
            ></TeamCard>
            <TeamCard
              teamDes="Our mission at Rks Team is simple yet profound: to turn your ideas into remarkable, functional websites and web applications. We firmly believe in the power of the web to connect"
              teamName="Rakib Khan Shamim"
              teamDesignation="Founder, CEO"
            ></TeamCard>
          </div>
        </section>

        <section className="section whychosse-us">
          <Title
            title="Why Choose"
            subtitle="Us"
            description="We stand at the forefront of web development trends and technologies, constantly evolving our skills to deliver innovative solutions"
          ></Title>
          <div className="choose-us">
            <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              <ChooseUs></ChooseUs>
              <ChooseUs></ChooseUs>
              <ChooseUs></ChooseUs>
              <ChooseUs></ChooseUs>
            </div>
          </div>
        </section>

        <section className="section portfolio">
          <Title
            title="Our Impressive"
            subtitle="Portfolio"
            description="We stand at the forefront of web development trends and technologies, constantly evolving our skills to deliver innovative solutions"
          ></Title>
          <div className="row grid grid-cols-1 lg:grid-cols-4 gap-5 mt-3">
            <img src={gallery} alt="" className="row-span-2 lg:col-span-2" />
            <img src={gallery} alt="" className="row-span-1" />
            <img src={gallery} alt="" className="row-span-1" />
            <img src={gallery} alt="" className="row-span-1" />
            <img src={gallery} alt="" className="row-span-1" />
          </div>
          <button className="buttons w-full flex justify-center items-center mt-10">
            <Button buttonTitle="Show All"></Button>
          </button>
        </section>
      </div>
        <footer>
          <Footer></Footer>
        </footer>
    </div>
  );
};

export default Home;
