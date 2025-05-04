
import facbook from '../assets/icons/facbook.png'
import instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'

import React from 'react'

function Footer() {
  return (
    <>
  <div className="container bg-[#7168AF] flex justify-between items-center text-white flex-col md:flex-row">
    <div className="logo ml-7 mt-5">
      <img className='w-32' src="logo.png" alt="" />
      <a href="https://facbook.com"> <img className='w-9 ml-3 hover:bg-[#FBAD27]' src={facbook} alt="" /></a>
      <div className="flex">
      <a href="https://facbook.com"> <img className='w-10 ml-3 hover:bg-[#FBAD27]' src={instagram} alt="" /></a>
      <p className='ml-13 text-[#FBAD27] text-bold hover:text-white'>All Social Media</p>
      </div>
      <a href="https://facbook.com"> <img className='w-10 ml-3 hover:bg-[#FBAD27]' src={twitter} alt="" /></a>
    </div>

    <div className="links flex flex-col gap-1 m-5">
      <h3 className='text-500 font-bold'>Quick links</h3>
      <a href="Product" className='hover:text-[#FBAD27]'>Product</a>
      <a href="Product" className='hover:text-[#FBAD27]'>Trainers</a>
      <a href="Product" className='hover:text-[#FBAD27]'> Princing</a>
      <a href="Product" className='hover:text-[#FBAD27]'>Members</a>
      <a href="Product" className='hover:text-[#FBAD27]'>Contact</a>
    </div>
    
    <div className="img">
      <img className='w-[90px] mr-10' src="footer_img.png" alt="" />
    </div>
   

  </div>

    </>
  )
}

export default Footer