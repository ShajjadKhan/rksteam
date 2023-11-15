import React from 'react';
import Description from '../Description/Description';

const Title = ({title, subtitle,description}) => {
  return (
    <div className="title flex justify-center items-center flex-col">
      <h1 className='text-xl md:text-4xl font-bold text-center '><span className='primary-text'>{title}</span> <span className='indecator'>{subtitle}</span></h1>
      <Description description={description}></Description>
    </div>
  );
};

export default Title;