import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav >
        <div id='header' className="container flex justify-between items-center bg-[#7168AF] text-white font-bold py-4  z-100">
             
          <Link to="/"><img className="w-32 ml-5" src="Logo-H.png" alt="Logo" /></Link>
         

          <ul className="flex hidden md:flex gap-6 px-10">

          <li>
          <Link to="/Dashboard">Dashboard</Link>
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
          <Link to="/Members">Members</Link>
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
          <Link to="/Members">Members</Link>
         </li> 

         <li>
          <Link to="/Contact">Contact</Link>
         </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;