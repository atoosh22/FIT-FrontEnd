import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>

      <Header/>
     <Sidebar/>
     
    </>
  )
};

function Sidebar(){
  return(

    <>
  {/* sidebar */}
   <div className="flex ">
     <div className="flex-col bg-[#7168AF] text-white gap-5 py-32 t w-45 h-screen text-center">
      <ul>
   
             <li className='flex gap-2 font-bold font-[Roboto] pl-4 pb-3 hover:bg-[#FBAD26] '>
               <ion-icon name="grid-outline" className="text-3xl"></ion-icon>
             <Link to="/">Dashboard</Link>
            </li>
     {/* end dashboard */}
      <li className='flex gap-2 font-bold font-[Roboto] pl-4 pb-3 hover:bg-[#FBAD26]'>
               <ion-icon name="home-outline" className="text-3xl"></ion-icon>
             <Link to="/">Home</Link>
            </li>
            <li className='flex gap-2 font-bold font-[Roboto] pl-4 pb-3 hover:bg-[#FBAD26]'>
            <ion-icon name="gift-outline" className="text-3xl"></ion-icon>
             <Link className='font-bold font-[Roboto]' to="/Product">Product</Link>
            </li>
         {/* end product */}
            <li className='flex gap-2 font-bold font-[Roboto] pl-4 pb-3 hover:bg-[#FBAD26]'>
           <ion-icon name="accessibility-outline" className="text-3xl"></ion-icon>
             <Link className='font-bold font-[Roboto]' to="/Trainers">Trainers</Link>
            </li>
      {/* end Trainers */}
            <li className='flex gap-2 font-bold font-[Roboto] pl-4 pb-3 hover:bg-[#FBAD26]'>
               <ion-icon name="wallet-outline" className="text-3xl"></ion-icon>
             <Link className='font-bold font-[Roboto]' to="/pricing">Pricing</Link>
            </li>
    {/* end pricing */}
   
             <li className='flex gap-2 font-bold font-[Roboto] pl-4 pb-3 hover:bg-[#FBAD26]'>
               <ion-icon name="person-circle-outline" className="text-3xl"></ion-icon>
             <Link className='font-bold font-[Roboto]' to="/Members">Members</Link>
            </li> 
    {/* end members */}
            <li className='flex gap-2 font-bold font-[Roboto] pl-4 pb-3 hover:bg-[#FBAD26]'>
              <ion-icon name="mail-outline" className="text-3xl"></ion-icon>
             <Link className='font-bold font-[Roboto]' to="/Contact">Contact</Link>
            </li>

            <li className='flex gap-2 font-bold font-[Roboto] pl-4 pb-3 hover:bg-[#FBAD26]'>
              <ion-icon name="people-sharp" className="text-3xl"></ion-icon>
             <Link className='font-bold font-[Roboto]' to="/Users">User</Link>
            </li>
             </ul>
     </div>
     {/* end user */}

     {/* // End side bard */}

             <div className="grid grid-cols-1 md:grid-cols-3 w-8/10 h-10 mx-14 my-39 gap-6">
             {/* card1 */}
              <div className="shadow rounded bg-[#E8C37E] text-white px-4 py-10 hover:bg-[#7C5ABA]">
                <div className="flex justify-between ">
                  <ion-icon name="bag-remove-outline" className="text-4xl"></ion-icon>
                  <h3 className='text-4xl pr-8'>20</h3>
                </div>
                <h2 className='text-2xl font-bold'>Total Products</h2>
              </div>

              {/* card two */}

               <div className="shadow rounded bg-[#7168AF] text-white px-4 py-10 hover:bg-[#E8C37E]">
                <div className="flex justify-between ">
                 <ion-icon name="accessibility-outline" className="text-4xl"></ion-icon>
                  <h3 className='text-4xl pr-8'>10</h3>
                </div>
                <h2 className='text-2xl font-bold'>Total Trainers</h2>
              </div>

              {/* card Tree */}

                 <div className="shadow rounded bg-[#E8C37E] text-white px-4 py-10 hover:bg-[#7C5ABA] ">
                <div className="flex justify-between ">
                 <ion-icon name="woman-outline" className="text-4xl"></ion-icon>
                  <h3 className='text-4xl pr-8'>200</h3>
                </div>
                <h2 className='text-2xl font-bold'>Total members</h2>
              </div>

            {/* card four               */}

               <div className="shadow rounded bg-[#7168AF] text-white px-4 py-10 hover:bg-[#E8C37E]">
                <div className="flex justify-between ">
                 <ion-icon name="person-add-outline" className="text-4xl"></ion-icon>
                  <h3 className='text-4xl pr-8'>30</h3>
                </div>
                <h2 className='text-2xl font-bold'>Total Users</h2>
              </div>

              {/* card five */}

               <div className="shadow rounded bg-[#E8C37E] text-white px-4 py-10 hover:bg-[#7C5ABA]">
                <div className="flex justify-between ">
                <ion-icon name="wallet-outline" className="text-4xl"></ion-icon>
                  <h3 className='text-4xl pr-8'>25</h3>
                </div>
                <h2 className='text-2xl font-bold'>Total pricing</h2>
              </div>

              {/* card six */}

               <div className="shadow rounded bg-[#7168AF] text-white px-4 py-10 hover:bg-[#E8C37E]">
                <div className="flex justify-between ">
               <ion-icon name="clipboard-outline" className="text-4xl"></ion-icon>
                  <h3 className='text-4xl pr-8'>40</h3>
                </div>
                <h2 className='text-2xl font-bold'>Total Supplement</h2>
              </div>

              

              

              
             
             
           
             </div>
   </div>
              
    
    
    </>
  )
}


  

export default Dashboard