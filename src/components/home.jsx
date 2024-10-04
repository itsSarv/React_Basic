import React from 'react'
import Nav from '../components/nav'



const home = () => {
  return (
    <div className='md:block w-screen flex min-h-screen bg-[#181532] justify-center items-center'>
      <Nav />

      {/* home image  */}
      <img className='lg:block hidden absolute right-0 top-0 z-10 h-[100vh] opacity-40  animate__animated  animate__zoomIn overflow-hidden ' src="./images/profile.png" alt="dfd" />

      {/* home text */}
      <div className='m-0 flex flex-col h-[100vh] gap-10 justify-center lg:pl-32 md:pl-20 pl-4  animate__animated animate__fadeInLeft'>
        <h1 className='text-white text-5xl font-black'>Transforming Ideas <br /> Into <span className='text-[#E43A33] text-center'>Digial Reality</span></h1>

        <p className='text-sm text-[#ffffffab]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias {<br />} laborum consequuntur, maxime a tenetur id.</p>
      </div>

    </div>
  )
}

export default home