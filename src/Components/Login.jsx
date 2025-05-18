import React from 'react'

function Login() {
  return (
   <>
   <Log/>
   
   </>
  )
};

function Log(){
    return(
        <>

        <form action=""  className='my-32 shadow-lg w-3/8 h-[400px] rounded-lg mx-auto pl-6'>
            <h3 className='pt-5 font-bold text-2xl'>LogIn</h3>
            <input className='w-[80%] p-3 border my-5' type="text" placeholder='Username' required /><br/>
            <input className='w-[80%] p-3 border my-5' type="password" placeholder='Password' required /><br/>
            <input className='w-[80%] p-3 text-white my-5 bg-[#023047]' type="submit" value='LogIn' placeholder='Password' required /><br/>
        </form>

        
        </>
    )
}


export default Login