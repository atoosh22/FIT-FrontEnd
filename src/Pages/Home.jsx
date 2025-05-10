import header from '../assets/img/Header.png'
import header_img from '../assets/img/header_img.png'
import aboutImg from '../assets/img/aboutImg.png';
import course1 from '../assets/img/course1.jpg';
import course2 from '../assets/img/course2.jpg';
import course4 from '../assets/img/course4.jpg';
import course6 from '../assets/img/course6.jpg';
import course7 from '../assets/img/course7.jpg';
import course5 from '../assets/img/course5.jpg';
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';
import icon4 from '../assets/icons/icon4.png';
import icon5 from '../assets/icons/icon5.png';

import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Body />
      <Workout />
      <Schedule />
      <Footer />
    </>
  );
}
// Hero
function Hero(){
  return(
    <>
        <div className=" bg-[url('../src/assets/img/Header.png')] bg-cover bg-center min-h-[600px] opacity-70" data-aos="fade-right" >
       <div className="flex gap-5 mx-20 flex-col md:flex-row">
       <div className="text pt-32">
       <h2 className='font-bold text-4xl font-[roboto]'>Perfect Workout <br/><span className='text-[#8368FF]'>Coach For Body Shape</span></h2>
       <p className='font-[Poppins] py-2 mb-6'>Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. <br/> Praesent massa odio,
        pellentesque in consectetur quis, volutpat sit amet erat.</p>
        <a className='bg-[#FBAD26] rounded-lg px-4 py-2  text-white hover:bg-[#7168AF]' href="#">Read More</a>
       </div>
       <div className="img">
        <img className='pt-10 ' src={header_img} alt="" />
        <div className="bg-[#7168AF]  p-5 text-white rounded-lg ">
        <a href="#"><h3>Book Your Appointment</h3></a>
       </div>
       </div>

    
       </div>

       <div className=" flex gap-10 justify-center bg-white mx-10 shadow-lg rounded-lg p-5 flex-col md:flex-row">
        <div className="flex gap-2">
        <ion-icon name="location-outline" className="text-4xl text-[#FBAD26]"></ion-icon>
          <p>Choose your location</p>
        </div>

        {/* 2 */}
        <div className="flex gap-2">
        <ion-icon name="calendar-outline" className="text-3xl text-[#FBAD26]"></ion-icon>
          <p>Choose visiting Date</p>
        </div>

        {/* 3 */}

        <div className="flex gap-2">
        <ion-icon name="barbell-outline" className="text-3xl text-[#FBAD26]"></ion-icon>
          <p>Choose Your GYM</p>
        </div>
        {/* 4 */}

        <div className="flex gap-2">
        <ion-icon name="person-outline" className="text-3xl text-[#FBAD26]"></ion-icon>
          <p>Choose Your GYM Coach</p>
        </div>
       </div>
       
    </div>
    
    </>
  )
}
//  body
function Body() {
  return (
    <div className="container flex justify-between flex-col md:flex-row mt-71" data-aos="fade-right">
      <div className="img">
        <img  src={aboutImg} alt="About" />
      </div>
      <div className="text mr-10 ">
        <h2 className='text-3xl text-bold font-[Roboto]'>Let Us Find The Perfect Workout For You!</h2>
        <p className='mb-10 font-[Poppins] mt-3'>Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. <br />
          Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar molestie, <br />
          augue massa volutpat felis, at rhoncus tortor velit vel diam. Cras ac suscipit metus
        </p>
        <a className='bg-[#FBAD27] text-white mt-10 px-3 py-2 shadow-lg rounded-lg hover:bg-[#7168AF]' href="#">Read More</a>
      </div>
    </div>
  );
}
  
// workout
const Workout = () => {
  return (
    <>
      <div className="text-center">
        <h3 className='text-3xl font-bold text-[#3e3e3e] mt-32 font-[Roboto]'>Latest Workout</h3>
        <p>Fall in love with Fitness</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
        <div className="shadow-lg mb-32" data-aos="flip-left">
          <img src={course1} alt="" />
          <div className="m-3">
            <p className='font-[Poppins]'>Yoga fundamentals</p>
            <h3>25.90</h3>
          </div>
        </div>
        <div className="shadow mb-32" data-aos="fade-left">
          <img src={course2} alt="" />
          <div className="m-3">
            <p className='font-[Poppins]'>Total Body Stretchings</p>
            <h3>20.50</h3>
          </div>
        </div>
        <div className="shadow mb-32" data-aos="zoom-in-up">
          <img src={course4} alt="" />
          <div className="m-3">
            <p className='font-[Poppins]'>Strength Upper Body</p>
            <h3>26.7</h3>
          </div>
        </div>
        <div className="shadow" data-aos="fade-left">
          <img src={course6} alt="" />
          <div className="m-3">
            <p className='font-[Poppins]'>Yoga fundamentals</p>
            <h3>30.00</h3>
          </div>
        </div>
        <div className="shadow" data-aos="zoom-in-up" >
          <img src={course7} alt="" />
          <div className="m-3">
            <p className='font-[Poppins]'>Total Body Stretchings</p>
            <h3>15.60</h3>
          </div>
        </div>
        <div className="shadow" data-aos="fade-left">
          <img src={course5} alt="" />
          <div className="m-3">
            <p className='font-[Poppins]'>Strength Upper Body</p>
            <h3>22.2</h3>
          </div>
        </div>
      </div>
    </>
  );
} 

// Schedule

function Schedule() {
  return (
    <>
      <h3 className='text-3xl font-bold text-[#3e3e3e] text-center mt-32 font-[Roboto]'>Our Class Schedule</h3>
      <div className="flex gap-6 bg-gray-100 md:w-full mt-14 py-3 text-center">
        <div className="flex gap-5 md:gap-[180px] px-10">
          <button className='bg-[#FBAD27] text-white px-3 shadow-lg rounded-lg hover:bg-[#7168AF]'>Monday</button>
          <button>Tuesday</button>
          <button>Wednesday</button>
          <button>Thursday</button>
          <button>Friday</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-15 mx-10">
        <div className="shadow-lg bg-gray-150 p-10">
          <img className='w-96' src={icon1} alt="" />
          <h3 className='text-bold text-2xl py-2'>Cardio</h3>
          <p>Rachel Adam</p>
          <button className='bg-[#FBAD27] text-white px-3 shadow-lg rounded-lg hover:bg-[#7168AF] my-4'>06AM-08AM</button>
        </div>
        <div className="shadow-lg bg-gray-150 p-10">
          <img className='w-96' src={icon2} alt="" />
          <h3 className='text-bold text-2xl py-2'>Weight</h3>
          <p>Rachel Adam</p>
          <button className='bg-[#FBAD27] text-white px-3 shadow-lg rounded-lg hover:bg-[#7168AF] my-4'>06AM-08AM</button>
        </div>
        <div className="shadow-lg bg-gray-150 p-10">
          <img className='w-96' src={icon3} alt="" />
          <h3 className='text-bold text-2xl py-2'>Yoga</h3>
          <p>Rachel Adam</p>
          <button className='bg-[#FBAD27] text-white px-3 shadow-lg rounded-lg hover:bg-[#7168AF] my-4'>06AM-08AM</button>
        </div>
        <div className="shadow-lg bg-gray-150 p-10">
          <img className='w-96' src={icon4} alt="" />
          <h3 className='text-bold text-2xl py-2'>Crossfit</h3>
          <p>Rachel Adam</p>
          <button className='bg-[#FBAD27] text-white px-3 shadow-lg rounded-lg hover:bg-[#7168AF] my-4'>06AM-08AM</button>
        </div>
        <div className="shadow-lg bg-gray-150 p-10">
          <img className='w-96' src={icon5} alt="" />
          <h3 className='text-bold text-2xl py-2'>Boxing</h3>
          <p>Rachel Adam</p>
          <button className='bg-[#FBAD27] text-white px-3 shadow-lg rounded-lg hover:bg-[#7168AF] my-4'>06AM-08AM</button>
        </div>
      </div>
    </>
  );
}

export default Home;