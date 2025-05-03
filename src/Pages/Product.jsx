import aboutImg from '../assets/img/aboutImg.png';
import course1 from '../assets/img/course1.jpg';
import course2 from '../assets/img/course2.jpg';
import course4 from '../assets/img/course4.jpg';
import course6 from '../assets/img/course6.jpg';
import course7 from '../assets/img/course7.jpg';
import course5 from '../assets/img/course5.jpg';
import React from 'react';
import Header from '../Components/Header';

function Produc() {
  return (
    <>
      <Header />
      <Body />
      <Workout/>
      <Schedule/>
    
    </>
  );
}

const Hero = () => {
  return (
    <>
      {/* Add content as needed */}
    </>
  );
};

function Body() {
  return (
    <div className="container flex justify-between flex-col md:flex-row mt-96">
      <div className="img">
        <img src={aboutImg} alt="About" />
      </div>
      <div className="text mr-10 ">
        <h2 className='text-3xl text-bold'>Let Us Find The Perfect Workout For You!</h2>
        <p className='mb-10'>Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. <br/>
Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar molestie, <br/>
augue massa volutpat felis, at rhoncus tortor velit vel diam. Cras ac suscipit metus</p>
<a className='bg-[#FBAD27] text-white mt-10 px-3 py-2 shadow-lg rounded-lg hover:bg-[#7168AF] ' href="#">Read More</a>
      </div>
    </div>
  );
}

const Workout=()=>{
  return(
    <>
  <div className="text-center">
  <h3 className='text-3xl font-bold text-[#3e3e3e]  mt-32'>Latest Workout</h3>
  <p>Fall in love with Fitness</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3  gap-8 m-10">
    <div className="shadow-lg mb-32 ">
      <img src={course1} alt="" />
     <div className="m-3">
     <p>Yoga fundamentals</p>
     <h3>25.90</h3>
     </div>
    </div>
    <div className="shadow mb-32">
      <img src={course2} alt="" />
     <div className="m-3">
     <p>Total Body Stretchings</p>
     <h3>20.50</h3>
     </div>
    </div>
    <div className="shadow mb-32">
      <img src={course4} alt="" />
     <div className="m-3">
     <p>Strengh Upper  Body</p>
     <h3>26.7</h3>
     </div>
    </div>
    <div className="shadow">
      <img src={course6} alt="" />
      <div className="m-3">
      <p>Yoga fundamentals</p>
      <h3>30.00</h3>
      </div>
    </div>
    <div className="shadow">
      <img src={course7} alt="" />
     <div className="m-3">
     <p>Total Body Stretchings</p>
     <h3>15.60</h3>
     </div>
    </div>
    <div className="shadow">
      <img src={course5} alt="" />
     <div className="m-3">
     <p>Strengh Upper  Body</p>
     <h3>22.2</h3>
     </div>
    </div>

  </div>
    
    </>
  )
}

function Schedule(){
  return(
    <>
    <h3 className='text-3xl font-bold text-[#3e3e3e] text-center mt-32'>Our Class Schedule</h3>

    <div className="flex gap-6 bg-gray-100 w-full mt-14">
    <div className="flex gap-20 ml-96 justify-between">
    <button className='bg-[#FBAD27] text-white  px-3  shadow-lg rounded-lg hover:bg-[#7168AF]'>Monday</button>
      <button>Tuesday</button>
      <button>Wednesday</button>
      <button>Thrusday</button>
      <button>Friday</button>
    </div>

    </div>

    <div className="grid grid-cols1 md:grid cols-3">
      <div className="shadow-lg bg-gray-150">
        hhhh

      </div>
    </div>
    
    </>
  )
}

export default Produc