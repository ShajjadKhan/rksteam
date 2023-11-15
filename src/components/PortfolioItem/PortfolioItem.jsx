import React from 'react';
import gallery from '../../assets/gallery.webp';

const PortfolioItem = ({className}) => {
  return (
    <div className='w-full'>
        <img src={gallery} alt="" className={className}/>
    </div>
  );
};

export default PortfolioItem;