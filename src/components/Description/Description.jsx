import React from 'react';

const Description = ({description}) => {
  return (
    <p className='w-full lg:w-[50%] bg-red text-center mt-3 secondary-text text-sm lg:text-base'>
     {description}
    </p>
  );
};

export default Description;