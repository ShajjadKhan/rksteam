import React from 'react';

const Button = ({buttonTitle}) => {
  return (
    <div>
      <button className='btn'>{buttonTitle}</button>
    </div>
  );
};

export default Button;