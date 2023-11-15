import React from 'react';
import branding from '../../assets/vimeo.png';
const ShortService = ({singledata}) => {
  const {title,description:des} = singledata;
  console.log(title)
  return (
        <li className="item flex items-center secondary p-3 gap-2">
          <img src={branding} alt="branding-img" />
          <div className="item-content">
            <h1 className='text-xl primary-text'>{title}</h1>
            <p className='secondary-text text-xs'>{des}</p>
      </div>
    </li>
  );
};

export default ShortService;