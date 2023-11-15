import React from 'react';
import profile from '../../assets/profile.jpg';
import Button from '../Button/Button';
const TeamCard = ({teamDes,teamName,teamDesignation}) => {
  return (
    <div className='secondary p-3 teamcard flex justify-center items-center flex-col'>
       <div className="card-img w-[100px] h-[100px] primary">
        <img src={profile} alt="" className='w-[100%] h-[100%] object-cover'/>
       </div>
       <div className="card-title">
        <h1 className='text-xl font-bold mb-2 mt-2'>{teamName}</h1>
       </div>
       <div className="card-designation bg-[#150623] py-1 mb-2 px-5">
        <h1 className=''>{teamDesignation}</h1>
       </div>
       <div className="card-description">
        <p className='secondary-text text-base mb-2'>{teamDes}</p>
       </div>
       <div className="card-button">
        <Button buttonTitle='Message'></Button>
       </div>
    </div>
  );
};

export default TeamCard;