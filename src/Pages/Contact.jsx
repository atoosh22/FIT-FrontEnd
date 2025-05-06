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
    <div className="mx-32 p-8 my-20 flex justify-between gap-16 md:shadow-lg flex-col md:flex-row bg-gray-50">

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
        <input className='border-2 border-gray-200 px-4 py-2' type="text" placeholder='Enter your Name' required/>
        <input  className='border-2 border-gray-200 px-4 py-2' type="email" placeholder='Enter your Email' required/>
        
      </div>
     

      <textarea className='w-full h-32 border-2 border-gray-200 px-4 py-2 bg-gray-50 mb-4' name="textarea" id="" placeholder='Your Message:'>

        </textarea>
     

        <a className='bg-[#FBAD26] px-3 py-2 text-white rounded-lg ' href="#">Send a Message</a>
      </form>
      </div>
    </div>
    </>
  )

}

export default Contact