import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center bg-[#7168AF] text-white font-bold py-4 shadow-lg z-index-100">
          <img className="w-32 ml-5" src="Logo-H.png" alt="Logo" />

          <ul className="flex hidden md:flex gap-6 px-10">

          <li>
          <Link to="/">Home</Link>
         </li>

         <li>
          <Link to="/Product">Product</Link>
         </li>

         <li>
          <Link to="/Trainers">Trainers</Link>
         </li>

         <li>
          <Link to="/pricing">Pricing</Link>
         </li>


          <li>
          <Link to="/Member">Members</Link>
         </li> 

         <li>
          <Link to="/Contact">Contact</Link>
         </li>
          </ul>

          <img 
            id="menu" 
            className="w-10 flex md:hidden mx-5 cursor-pointer" 
            src="menu.png" 
            alt="Menu" 
            onClick={toggleMenu} 
          />
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobileMenu" className="mobile-menu bg-[#7168AF] text-white">
          <ul className="flex flex-col gap-4 px-10 py-4">
            
            <a href="#"><li className="hover:text-[#FBAD27]">Product</li></a>
            <a href="#"><li className="hover:text-[#FBAD27]">Trainers</li></a>
            <a href="#"><li className="hover:text-[#FBAD27]">Princing</li></a>
            <a href="#"><li className="hover:text-[#FBAD27]">Members</li></a>
            <a href="#"><li className="hover:text-[#FBAD27]">Contact</li></a>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;