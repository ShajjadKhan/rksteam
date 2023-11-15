import React from 'react';
import brand from '../../assets/brand 1.png';
import Button from '../Button/Button';
const ChooseUs = () => {
  return (
    <div className='choose-item flex justify-center items-center flex-col secondary p-5'>
      <div className="choose-item-img ">
        <img src={brand} alt="" />
      </div>
      <div className="choose-us-title mt-2">
        <h1 className='text-2xl'>Logo Design </h1>
      </div>
     <div className="choose-us-des mt-2 mb-2 ">
     <p className='secondary-text text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nihil dolorem sed aliquam debitis voluptatum ratione</p>
     </div>
     <div className="choose-us-btn">
      <Button buttonTitle='Buy Now'></Button>
     </div>
    </div>
  );
};

export default ChooseUs;