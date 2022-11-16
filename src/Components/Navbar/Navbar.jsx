import React from "react";
import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
    const [showMenu, setShowmenu] = useState("menu_box_hidden");
  return (
    <>
      <div className="main_nav">
        <div className="logo">
          <p>logo</p>
        </div>
        <div className="menu_btn">
            {/* use icon here */}
          <p><i onClick={()=>{
            if(showMenu === "menu_box_hidden"){
                setShowmenu("menu_box");
            } else {
                setShowmenu("menu_box_hidden");
            }
          
          }} className="fa-solid fa-2x fa-bars"></i></p>
        </div>
        <div className={showMenu}>
            <div className="close">
                {/* Use icon here */}
                <p onClick={()=>{
                    setShowmenu("menu_box_hidden");
                }}>Close</p>
            </div>
            <h1>Menu</h1>
            <br />
            <p className="menu_options_btn">Home</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
