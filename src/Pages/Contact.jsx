import React from 'react'
import Header from '../Components/Header'

function Contact() {
  return (
  <>

    <Header/>
    <ContactUs/>
    
  
  </>

  
  )
}

const ContactUs=()=>{
  return(
    <>
    <div className="mx-32 p-8 my-50 flex justify-between gap-16 md:shadow-lg flex-col md:flex-row bg-gray-50" data-aos="fade-right">

      <div className="py-4">
      <h2 className='text-2xl font-[Roboto]'>Contact Us</h2>
      <h5 className='text-xl font-thin py-3'>Email:</h5>
      <p>Fitzone@gmail.com</p>
      
      <h5 className='text-xl font-thin py-3'>Tell:</h5>
      <p>+252614944045</p>
      <p>+2520907958614</p>

      <h5 className='text-xl font-thin py-3'>Address:</h5>
      <p>Mogadishu-Somalia</p>

      </div>


      <div className="py-4">
      <h2 className='text-2xl font-[Roboto]'> Contact Form</h2>
      <form>
      <div className="flex gap-6 my-5 flex-col md:flex-row">
       <input className='w-[90%] border border-gray-300 shadow-lg rounded-lg p-2 my-2 bg-white' type="text" required placeholder='Enter Full Name' /><br/>
        
        <input className='w-[90%] border border-gray-300 shadow-lg rounded-lg p-2 my-2 bg-white' type="text" required placeholder='Enter Phone Number' /><br/>
        
        
      </div>
     

      <textarea className='w-full h-32 border-2 border-gray-200 px-4 py-2 bg-gray-50 mb-4' name="textarea" id="" placeholder='Your Message:'>

        </textarea>
     

        <input className='bg-[#82b6a8] text-white px-2 py-1 rounded ' type="submit" value='Send a Messege' />
      </form>
      </div>
    </div>
    </>
  )

}

export default Contact;