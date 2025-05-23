import React from 'react';
// import PricingHeader from '../assets/img/trainers.jpg';
import team_Member_1 from '../assets/img/team_Member_1.png';
import team_Member_2 from '../assets/img/team_Member_2.png';
import team_Member_3 from '../assets/img/team_Member_3.png';
import team_Member_4 from '../assets/img/team_Member_4.png';
import team_Member_5 from '../assets/img/team_Member_5.png';
import team_Member_6 from '../assets/img/team_Member_6.png';
import facbook from '../assets/icons/facbook.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import our_news_1 from '../assets/img/our_news_1.png';
import our_news_2 from '../assets/img/our_news_2.png';
import our_news_3 from '../assets/img/our_news_3.png';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Trainers() {
  return (
    <>
      <Header />
      <Hero/>
      <Team />
      <Post/>
      <Footer/>
    </>
  );
}

function Hero(){
  return(
    <>
        <div className="bg-[url('../src/assets/img/trainers.jpg')] bg-cover bg-center min-h-[570px] opacity-0.8" data-aos="fade-up-right">
     <h3 className='text-7xl text-white pt-65 text-center font-[Roboto] fott-bold'>OUR TRAINERS</h3>
    </div>
    
    </>
  )
}

function Team() {
  return (
    <div className="text-center mt-20 px-10">
      <p className='text-[#023047] font-[Roboto] py-2'>TEAM MEMBERS</p>
      <h3 className='font-bold font-[Roboto] text-3xl'>TEAM OF EXPERT COACHES</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        
        {/* Member 1 */}
        <div className="shadow-lg p-5 my-20" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
          <img src={team_Member_1} alt="Marvin Joiner" />
          <h4 className='font-bold py-1'>MARVIN JOINER</h4>
          <p>Crossfit Coach</p>
          <div className="flex gap-3">
          <a href="#">    <img  src={facbook} alt="Facebook" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">     <img  src={instagram} alt="instagram" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">    <img  src={twitter} alt="twitter" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
          </div>
        </div>

        {/* Member 2 */}
        <div className="shadow-lg p-5 my-20" data-aos="zoom-in-up">
          <img src={team_Member_2} alt="Patricia Woodrum" />
          <h4 className='font-bold py-1'>PATRICIA WOODRUM</h4>
          <p>Cardio & Conditioning</p>
          <div className="flex gap-3">
            <a href="#">    <img  src={facbook} alt="Facebook" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">     <img  src={instagram} alt="instagram" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">    <img  src={twitter} alt="twitter" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
         </div>
        </div>

        {/* Member 3 */}
        <div className="shadow-lg p-5 my-20" data-aos="zoom-out-left" >
          <img src={team_Member_3} alt="Hannaz Stone" />
          <h4 className='font-bold py-1'>HANNAZ STONE</h4>
          <p>Strength Coach</p>
          <div className="flex gap-3">
           <a href="#">    <img  src={facbook} alt="Facebook" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">     <img  src={instagram} alt="instagram" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">    <img  src={twitter} alt="twitter" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
         </div>
        </div>

        {/* Member 4 */}
        <div className="shadow-lg p-5 my-20" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <img src={team_Member_4} alt="John Doe" />
          <h4 className='font-bold py-1'>JOHN DOE</h4>
          <p>Yoga Instructor</p>
          <div className="flex gap-3">
          <a href="#">    <img  src={facbook} alt="Facebook" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">     <img  src={instagram} alt="instagram" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">    <img  src={twitter} alt="twitter" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
         </div>
        </div>

        {/* Member 5 */}
        <div className="shadow-lg p-5 my-20" data-aos="fade-up"
        data-aos-duration="3000">
          <img src={team_Member_5} alt="Jane Smith" />
          <h4 className='font-bold py-1'>JANE SMITH</h4>
          <p>Nutritionist</p>
          <div className="flex gap-3">
           <a href="#">    <img  src={facbook} alt="Facebook" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">     <img  src={instagram} alt="instagram" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">    <img  src={twitter} alt="twitter" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
          </div>
        </div>

        {/* Member 6 */}
        <div className="shadow-lg p-5 my-20" data-aos="zoom-out-down">
          <img src={team_Member_6} alt="Mike Johnson" />
          <h4 className='font-bold py-1'>MIKE JOHNSON</h4>
          <p>Fitness Trainer</p>
          <div className="flex gap-3">
           <a href="#">    <img  src={facbook} alt="Facebook" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">     <img  src={instagram} alt="instagram" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
            <a href="#">    <img  src={twitter} alt="twitter" className='w-6 bg-[#023047] hover:bg-black rounded-lg' /></a>
         </div>
        </div>

      </div>
    </div>
  );
}
//  posts
const Post=()=>{
  return(

   <>
  <div className="my-12 text-center">
  <p className='text-[#023047] font-[Roboto] py-2'>OUR NEWS</p>
  <h3 className='font-bold font-[Roboto] text-3xl'>LATEST BLOG POSTS</h3>
  </div>

  {/* cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10 ">
   <div className="bg-gray-200 py-4" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
   <img src={our_news_1} alt="" />
   <h2 className='w-10 bg-[#82b6a8] rounded-full text-center px-2 py-2 text-white ml-20 '>20</h2>
   <p className='px-6 py-3'>sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore,
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco</p>
   </div>

   <div className="bg-gray-200" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
   <img src={our_news_2} alt="" />
   <h2 className='w-10 bg-[#82b6a8] rounded-full text-center px-2 py-2 text-white ml-20 '>10</h2>
   <p className='px-6 py-3'>sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore,
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco</p>
   </div>

   <div className="bg-gray-200" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
   <img src={our_news_3} alt="" />
   <h2 className='w-10 bg-[#82b6a8] rounded-full text-center px-2 py-2 text-white ml-20 '>30</h2>
   <p className='px-6 py-3'>sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore,
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco</p>
   </div>

  </div>
   
   </>
  )
}

export default Trainers;