import React from 'react';


const AboutImg = ({attr}) => {
  return (
    <div className='w-full lg:w-[45%] mt-10 lg:mt-0'>
          <img src={attr} alt="about-img" className='w-full'/>
    </div>
  );
};

export default AboutImg;