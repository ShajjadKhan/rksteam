import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Menus from "../Menus/Menus";
import Button from "../Button/Button";

const Navbar = () => {
  const [activemenu, setActivemenu] = useState(false);
  const handleMenu = () =>{
    setActivemenu(true);
  }
  return (
    <div className="container pt-4">
      <nav>
        <div className="row flex justify-between items-center">
          <Logo></Logo>
          <div className="flex gap-5 justify-between items-center">
            <Menus activemenu={activemenu}></Menus>
            <Button buttonTitle="Sign UP" className='hidden lg:flex'></Button>
          
          </div>
          <div className="menu-btn lg:hidden" onClick={()=> setActivemenu(prev=>!prev)}>
              <span className={activemenu? "activeMenu" : 'menu'}></span>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
