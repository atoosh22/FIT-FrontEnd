
import PricingHeader from '../assets/img/pricing.jpg'
import pricing_tables_1 from '../assets/img/pricing_tables_1.png'
import pricing_tables_2 from '../assets/img/pricing_tables_2.png'
import pricing_tables_3 from '../assets/img/pricing_tables_3.jpg'
import pricing_tables_4 from '../assets/img/pricing_tables_4.jpg'
import pricing_tables_5 from '../assets/img/pricing_tables_5.jpg'
import pricing_tables_6 from '../assets/img/pricing_tables_6.jpg'

import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';

function Princing() {
  return (
  <>

    <Header/>
    <Hero/>
    <Tables/>
    <Footer/>

  
 
  
  </>
  )
}


function Hero(){
  return(
    <>
        <div className="bg-[url('../src/assets/img/pricing.jpg')] bg-cover bg-center min-h-[600px] opacity-70 ">
     <h3 className='text-7xl text-white pt-32 text-center font-[Roboto] fott-bold'>PRICING PLAN</h3>
    </div>
    
    </>
  )
}

function Tables(){
  return(
    <>

    <div className="mt-20 text-center ">
    <p className='text-[#FBAD26] font-[Roboto] py-2 '>PRICING TABLES</p>
      <h3 className='font-bold font-[Roboto] text-3xl '>CHOOSE YOUR PRICING PLAN</h3>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
       <div className="bg-gray-100 ">
   <img className='w-full' src={pricing_tables_1} alt="" />
   <h2 className='w-10 bg-[#FBAD26] rounded-full text-center flex justify-center px-12 py-6 text-white ml-2 '>$25<br/>/Month</h2>
   {/* 1 */}
   <h4 className='text-bold font-[Roboto] text-xl'>BASIC GYM</h4>
   <div className="font-thin p-4 ">
  <p>Unlimited clab access</p>
   <p>Group Attendence</p>
   <p>Gym fight clab</p>
   <p>body bulding</p>
<a href="#">   <button className='bg-[#7168AF] py-1  px-3 rounded-lg text-white border-2 '>Join now</button></a>
  </div>
   </div>

   {/* 2 */}
   <div className="bg-gray-100 ">
   <img className='w-full' src={pricing_tables_2} alt="" />
   <h2 className='w-10 bg-[#FBAD26] rounded-full text-center flex justify-center px-12 py-6 text-white ml-2 '>$30<br/>/Month</h2>
   <h4 className='text-bold font-[Roboto] text-xl'>STANDARD GYM</h4>
   <div className="font-thin p-4">
  <p>Unlimited clab access</p>
   <p>Group Attendence</p>
   <p>Gym fight clab</p>
   <p>body bulding</p>
   <a href="#">   <button className='bg-[#7168AF] py-1  px-3 rounded-lg text-white border-2 '>Join now</button></a>
  
  </div>
   </div>

   {/* 3 */}
   <div className="bg-gray-100 ">
   <img className='w-full h-[190px]' src={pricing_tables_3} alt="" />
   <h2 className='w-10 bg-[#FBAD26] rounded-full text-center flex justify-center px-12 py-6 text-white ml-2 '>$35<br/>/Month</h2>
    <h4 className='text-bold font-[Roboto] text-xl'>PREMIUM GYM</h4>
  <div className="font-thin p-4">
  <p>Unlimited clab access</p>
   <p>Group Attendence</p>
   <p>Gym fight clab</p>
   <p>body bulding</p>
   <a href="#">   <button className='bg-[#7168AF] py-1  px-3 rounded-lg text-white border-2 '>Join now</button></a>
  
  </div>
   </div>


   {/* 4 */}
   <div className="bg-gray-100 mt-20">
   <img className='w-full h-[190px]' src={pricing_tables_4} alt="" />
   <h4 className='text-bold font-[Roboto] text-xl mt-10'>Standard</h4>
  <div className="font-thin p-4">
  <p>Pay as you go</p>
   <p>perfect residence</p>
   <p>body bulding</p>
   <p><span className='text-4xl font-bold text-[#7168AF]'>$20</span>/per month</p>
   <a href="#">   <button className='bg-[#FBAD26] py-1  px-3 rounded-lg text-white border-2 '>Join now</button></a>
  
  </div>
   </div>

   {/* 5 */}

   <div className="bg-gray-100 mt-20 ">
   <img className='w-full h-[190px]' src={pricing_tables_5} alt="" />
  <h4 className='text-bold font-[Roboto] text-xl mt-10'>Professional</h4>
  <div className="font-thin p-4">
  <p>Pay as you go</p>
   <p>perfect residence</p>
   <p>body bulding</p>
   <p><span className='text-4xl font-bold text-[#7168AF]'>$25</span>/per month</p>
   <a href="#">   <button className='bg-[#FBAD26] py-1  px-3 rounded-lg text-white border-2 '>Join now</button></a>
  
  </div>
   </div>

   {/* 6 */}

   <div className="bg-gray-100 mt-20 ">
   <img className='w-full h-[190px]' src={pricing_tables_6} alt="" />
   <h4 className='text-bold font-[Roboto] text-xl mt-10'>Private</h4>
  <div className="font-thin p-4">
  <p>Pay as you go</p>
   <p>perfect residence</p>
   <p>body bulding</p>
   <p><span className='text-4xl font-bold text-[#7168AF]'>$10</span>/per month</p>
   <a href="#">   <button className='bg-[#FBAD26] py-1  px-3 rounded-lg text-white border-2 '>Join now</button></a>
  
  </div>
   </div>

       </div>
    </div>
    
    </>
  )
}
export default Princing