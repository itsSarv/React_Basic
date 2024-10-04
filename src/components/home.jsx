import React from 'react'
import Nav from '../components/nav'


const home = () => {
  return (
    <div className='h-[100vh] min-w-full bg-[#181532]'>
      <Nav />

      {/* home image  */}
      <img className='absolute right-0 top-0 z-10 h-[100vh] opacity-40  animate__animated  animate__zoomIn overflow-hidden ' src="../Assets/profile.png" alt="dfd" />

      {/* home text */}
      <div className='m-0 flex flex-col h-[100vh] gap-10 justify-center pl-32 animate__animated animate__fadeInLeft'>
        <h1 className='text-white text-5xl font-black'>Transforming Ideas <br /> Into <span className='text-[#E43A33] text-center'>Digial Reality</span></h1>

        <p className='text-sm text-[#ffffffab]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias <br /> laborum consequuntur, maxime a tenetur id.</p>
      </div>

    </div>
  )
}

export default home