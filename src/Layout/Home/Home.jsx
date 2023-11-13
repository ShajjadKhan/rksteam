import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../../components/Button/Button';
import banner from '../../assets/banner.png';
const Home = () => {
  return (
    <div className=''>
      <Helmet>
        <title>Rks Team || Home Page</title>
      </Helmet>
      <div className="container">
        <div className="home-section">
          <div className="row flex justify-between items-center h-[85vh] flex-col lg:flex-row">
            <div className="home-content w-full lg:w-1/2">
              <h3 className='text-xl md:text-4xl font-medium'><span className='separator-one'>Meet</span>Your Dream App </h3>
              <h1 className='text-2xl mt-2 lg:text-6xl font-bold mb-3 md:mt-8 md:mb-8'><span className='separator-one'>Let us</span> help you achieve your goals. Better</h1>
              <Button buttonTitle="Explore More"></Button>
            </div>
            <div className="home-banner mt-2 w-full lg:w-1/2 lg:mt-0">
              <img src={banner} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;