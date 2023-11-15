import React, { useEffect, useState } from 'react';
import ShortService from '../ShortService/ShortService';

const ShortServices = ({className}) => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch('/public/shortservice/shortservice.json')
    .then(res=> res.json())
    .then(data=> setServices(data))
  },[])
  return (
    <ul className={className}>
      {
        services.map(singledata => <ShortService singledata={singledata}></ShortService>)
      }
    </ul>
  );
};

export default ShortServices;