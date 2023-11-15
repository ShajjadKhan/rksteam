import React from 'react';
import Logo from './../Logo/Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='secondary flex justify-center items-center flex-col p-5 pb-10'>
        <Logo></Logo>
        <div className="text flex justify-center items-center flex-col">
         <Link to='/' className=' mt-2 secondary-text'>Privacy Policy</Link>
         <Link to='/' className=' mt-2 mb-2 secondary-text'>Terms And Condition</Link>
         <Link to='/' className='text-sm text-center'>2023 All Copyright Deserved ||<Link className='primary-text'>Rks Team.</Link> </Link>

        </div>
    </div>
  );
};

export default Footer;