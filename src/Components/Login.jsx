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
 <div className="flex justify-center shadow-lg w-4/8 mx-auto mt-32 rounded-lg h-[400px]">

 <div className="bg-blue-400 w-full rounded-lg">
    <h4>welcome Back Login</h4>
 </div>
 <form action="" className='w-full'>
    <input className='m-6' type="text" placeholder='username' />
    <input className='m-6' type="text" placeholder='username' />
    <input className='m-6' type="text" placeholder='username' />
    <input className='m-6' type="text" placeholder='username' />
    <input className='m-6' type="text" placeholder='username' />
 </form>
    

 </div>

        
        </>
    )
}


export default Login