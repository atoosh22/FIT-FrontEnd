import React from 'react';

function SignUp() {
  return (
    <>
      <Sign />
    </>
  );
}

const Sign = () => {
  return (
    <>
      <form action="" className='bg-gray-50 my-32 shadow-lg w-4/8 h-[680px] rounded-lg mx-auto pl-6'>
        <h3 className='pt-5 font-bold text-2xl'>Sign Up</h3>
        <input className='w-[80%] p-3 border my-5' type="text" placeholder='Enter Name' required /><br />
        <input className='w-[80%] p-3 border my-5' type="tel" placeholder='Enter Phone' required /><br />
        <input className='w-[80%] p-3 border my-5' type="email" placeholder='Enter Email' required /><br />
        
        <div className='flex items-center my-2'>
          <input className='mr-2' type="radio" name='gender' value="male" id="male" required />
          <label htmlFor="male">Male</label>
        </div>
        <div className='flex items-center my-2'>
          <input className='mr-2' type="radio" name='gender' value="female" id="female" required />
          <label htmlFor="female">Female</label>
        </div>

        <input className='w-[80%] p-3 border my-5' type="text" placeholder='Username' required /><br />
        <input className='w-[80%] p-3 border my-5' type="password" placeholder='Password' required /><br />
        <input className='w-[80%] p-3 text-white my-5 bg-[#82B6A8]' type="submit" value='Sign Up' /><br />
      </form>
    </>
  );
}

export default SignUp;