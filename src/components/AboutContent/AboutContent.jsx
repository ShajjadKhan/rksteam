import React from 'react';
import Button from './../Button/Button';

const AboutContent = () => {
  return (
    <div className='w-full lg:w-[50%]'>
      <div className="about-text">
          <h1 className="text-4xl font-bold "><span className='primary-text'>Our Team</span> Story</h1>
          <p className="secondary-text mt-3 mb-3">
            The European languages are members of the same family. Their
            separate existence is a myth. For science, music, sport, etc, Europe
            uses the same vocabulary. The languages only differ in their
            grammar, their pronunciation and their most common words.
          </p>
          <Button buttonTitle='Contact Us'></Button>
        </div>
    </div>
  );
};

export default AboutContent;