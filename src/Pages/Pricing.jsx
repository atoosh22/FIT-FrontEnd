import pricing_tables_1 from '../assets/img/pricing_tables_1.png'
import pricing_tables_2 from '../assets/img/pricing_tables_2.png'
import pricing_tables_3 from '../assets/img/pricing_tables_3.jpg'

import React from 'react'
import Header from '../Components/Header'

function Princing() {
  return (
  <>

    <Header/>
    <Tables/>
 
  
  </>
  )
}

function Tables(){
  return(
    <>
    <div className="my-10 text-center ">
    <p className='text-[#FBAD26] font-[Roboto] py-2 '>PRICING TABLES</p>
      <h3 className='font-bold font-[Roboto] text-3xl '>CHOOSE YOUR PRICING PLAN</h3>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
       <div className="bg-gray-100 ">
   <img className='w-full' src={pricing_tables_1} alt="" />
   <h2 className='w-10 bg-[#FBAD26] rounded-full text-center flex justify-center px-12 py-6 text-white ml-2 '>$25<br/>/Month</h2>
   <h4 className='text-bold font-[Roboto] text-xl'>BASIC GYM</h4>
   <div className="font-thin p-4">
  <p>Unlimited clab access</p>
   <p>Group Attendence</p>
   <p>Gym fight clab</p>
   <p>body bulding</p>
  </div>
   </div>


   <div className="bg-gray-100 ">
   <img className='w-full' src={pricing_tables_2} alt="" />
   <h2 className='w-10 bg-[#FBAD26] rounded-full text-center flex justify-center px-12 py-6 text-white ml-2 '>$30<br/>/Month</h2>
   <h4 className='text-bold font-[Roboto] text-xl'>STANDARD GYM</h4>
   <div className="font-thin p-4">
  <p>Unlimited clab access</p>
   <p>Group Attendence</p>
   <p>Gym fight clab</p>
   <p>body bulding</p>
  </div>
   </div>


   <div className="bg-gray-100 ">
   <img className='w-full h-[190px]' src={pricing_tables_3} alt="" />
   <h2 className='w-10 bg-[#FBAD26] rounded-full text-center flex justify-center px-12 py-6 text-white ml-2 '>$35<br/>/Month</h2>
    <h4 className='text-bold font-[Roboto] text-xl'>PREMIUM GYM</h4>
  <div className="font-thin p-4">
  <p>Unlimited clab access</p>
   <p>Group Attendence</p>
   <p>Gym fight clab</p>
   <p>body bulding</p>
  </div>
   </div>

       </div>
    </div>
    
    </>
  )
}
export default Princing