
import facbook from '../assets/icons/facbook.png'
import instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'

import React from 'react'

function Footer() {
  return (
    <>
  <div className="container  bg-[#82b6a8] flex justify-between items-center text-white flex-col md:flex-row">
    <div className="logo ml-7 mt-5">
      <img className='w-32' src="LOGO-H.png" alt="" />
      <a href="https://facbook.com"> <img className='w-9 ml-3 hover:bg-[#3e3e3e]' src={facbook} alt="" /></a>
      <div className="flex">
      <a href="https://facbook.com"> <img className='w-10 ml-3 hover:bg-[#3e3e3e]' src={instagram} alt="" /></a>
      <p className='ml-13 text-[#fff] text-bold hover:text-white'>All Social Media</p>
      </div>
      <a href="https://facbook.com"> <img className='w-10 ml-3 hover:bg-[#3e3e3e]' src={twitter} alt="" /></a>
    </div>

    <div className="links flex flex-col gap-1 m-5">
      <h3 className='text-500 font-bold'>Quick links</h3>
      <a href="Product" className='hover:text-[#3e3e3e]'>Product</a>
      <a href="Trainers" className='hover:text-[#3e3e3e]'>Trainers</a>
      <a href="pricing" className='hover:text-[#3e3e3e]'> Princing</a>
      <a href="members" className='hover:text-[#3e3e3e]'>Members</a>
      <a href="Contact" className='hover:text-[#3e3e3e]'>Contact</a>
    </div>
    
    <div className="img">
      <img className='w-[90px] mr-10' src="footer_img.png" alt="" />
    </div>
   

  </div>

    </>
  )
}

export default Footer