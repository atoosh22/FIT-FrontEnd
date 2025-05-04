import supplement from  '../assets/img/supplement.jpg'
import product1 from  '../assets/img/product1.png'
import product5 from  '../assets/img/product5.png'
import product2 from  '../assets/img/product2.png'



import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Product() {
  return (
 <>

 <Header/>
  <Supplement/>
  <SELLING/>
  <Footer/>
 
 </>
  )
}


const Supplement=()=>{
  return(
    <>
   <div className="flex justify-between my-20 mx-20 flex-col md:flex-row gap-4">
    <div className="img">
    <h3 className='bg-gray-100 shadow-lg text-center font-bold p-4 text-5xl rounded-lg'>WHY NEED THIS?</h3>
    <img className='w-[600px]' src={supplement} alt="" />
    </div>
  
    <div className="text mt-10">
      <h3 className='text-4xl font-[Roboto]'>Your Body Needs High <br/>
      <span className='text-[#7168AF] text-4xl text-bold mr-10'>Energy during Workout</span></h3>
      <p className='font-[Poppins] font-thin mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>
sed do eiusmod tempor incididunt ut labore et dolore <br/>magna aliqua. 
Ut enim ad minim veniam, quis nostrud <br/>exercitation ullamco</p>
    </div>
   </div>
    
    </>
  )
}

// end sectio one

function SELLING(){
  return(

    <>

<div className='bg-gray-100 mt-32 '>

<h4 className=' text-center text-bold text-4xl font-[Roboto] p-8'>HOT SELLING</h4>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
  {/* product1 */}
  <div className="shadow-lg bg-white rounded-lg hover:bg-gray-300 my-13 p-10 ">
    <img src={product1} alt="" />
    <h2 className='pl-20 mt-8 font-bold font-[Roboto]'>WOMEN<br/>DOSES</h2>
  </div>
  {/* product2 */}
  <div className="shadow-lg bg-white rounded-lg hover:bg-gray-300 my-13 p-10">
    <img src={product5} alt="" />
    <h2 className='pl-20 mt-8 font-bold font-[Roboto]'>STRONG<br/>DOSES</h2>
  </div>
 {/* product3 */}
  <div className="shadow-lg bg-white rounded-lg hover:bg-gray-300 my-13 p-10">
    <img src={product2} alt="" />
    <h2 className='pl-20 mt-8 font-bold font-[Roboto]'>MEN<br/>DOSES</h2>
  </div>

   {/* product4 */}

   <div className="shadow-lg bg-white rounded-lg hover:bg-gray-300 my-13 p-10">
    <img src={product2} alt="" />
    <h2 className='pl-20 mt-8 font-bold font-[Roboto]'>WOMEN<br/>DOSES</h2>
  </div>
   {/* product5 */}
   <div className="shadow-lg bg-white rounded-lg hover:bg-gray-300 my-13 p-10">
    <img src={product2} alt="" />
    <h2 className='pl-20 mt-8 font-bold font-[Roboto]'>STRONG<br/>DOSES</h2>
  </div>
   {/* product6 */}
   <div className="shadow-lg bg-white rounded-lg hover:bg-gray-300 my-13 p-10">
    <img src={product2} alt="" />
    <h2 className='pl-20 mt-8 font-bold font-[Roboto]'>WOMEN<br/>DOSES</h2>
  </div>

</div>

</div>
    
    </>
  )
}

export default Product