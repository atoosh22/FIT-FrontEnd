import React from 'react';

function Form() {
  return (
    <>
      <form className='w-4/8 h-full justify-center mx-auto bg-gray-50 shadow-lg rounded-lg text-center mt-37' data-aos="fade-down-right">
        <h3 className='bg-[#82b6a8] text-white font-bold text-2xl py-2 mb-4 rounded'>Add New Member</h3>
        
        <label className='font-bold'>Full Name</label>
        <input className='w-[90%] border border-1 shadow-lg rounded-lg p-2 my-2 bg-white ' type="text" required placeholder='Enter Full Name' /><br/>
        
        <label className='font-bold'>Phone</label><br/>
        <input className='w-[90%] border border-gray-300 shadow-lg rounded-lg p-2 my-2 bg-white' type="text" required placeholder='Enter Phone Number' /><br/>
        
        <label className='font-bold'>Address</label><br/>
        <input className='w-[90%] border border-gray-300 shadow-lg rounded-lg p-2 my-2 bg-white' type="text" required placeholder='Enter Location' /><br/>
        
        <label className='font-bold'>Shift</label><br/>
        <select className='w-[90%] border border-gray-300 shadow-lg rounded-lg p-2 my-2 bg-white' required><br/>
          <option disabled selected>----Select----</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select><br/>
        
        <label className='font-bold'>Date</label><br/>
        <input className='w-[90%] border border-gray-300 shadow-lg rounded-lg p-2 my-2 bg-white' type="date" required /><br/>
        
        <label className='font-bold'>Gender</label><br/>
        <div className='flex justify-center my-2'>
          <label className='mr-4'><input type="radio" name="gender" value="male" required /> Male</label>
          <label>
            <input type="radio" name="gender" value="female" required /> Female
          </label>
        </div>

         <label className='font-bold'>Paid</label><br/>
        <select className='w-[90%] border border-gray-300 shadow-lg rounded-lg p-2 my-2 bg-white' required><br/>
          <option disabled selected>----Select----</option>
          <option>One Month</option>
          <option>Two Months</option>
          <option>Tree Months</option>
        </select><br/>

        <div className="flex justify-between my-12 mx-20 pb-3">
            <input className='bg-[#58c8e5] text-white px-2 py-1 rounded ' type="submit" value='Save' />
            <input className='bg-[#82b6a8] text-white px-2 py-1 rounded ' type="reset" value='Clear' />
        </div>
      </form>
    </>
  );
}

export default Form;