import React from 'react'
import Nav from './nav'

const about = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-12 bg-[#181532]">
      <Nav />

      {/* profile-left */}
      <div className="flex flex-col gap-4">

        <h1 className="text-white font-black text-4xl animate__animated animate__backInDown">
          Captivating <span className="text-red-600">stories</span> <br />making cool frontend <br /> designs.
        </h1>

        <p className="text-sm text-white/70 mt-4 animate__animated animate__fadeInDown">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum <br /> eius sapiente numquam a. Sed, odio est quidem officiis error, ex <br /> delectus eum repudiandae corporis quia cupiditate <br /> beatae ipsam nihil rem quos aperiam?
        </p>

        {/* bottom left */}
        <div className=" flex gap-8 text-white/70 font-medium mt-8 animate__animated animate__fadeInDown">
          <div className="experience text-center">
            <p><span className="text-red-600 text-4xl font-extrabold">1+</span><br />YEARS OF <br /> EXPERIENCE</p>
          </div>
          <hr className="border-white/20 h-full" />
          <div className="clients text-center">
            <p><span className="text-red-600 text-4xl font-extrabold">10+</span><br />SAITISFIED <br /> CLIENTS</p>
          </div>
          <hr className="border-white/20 h-full" />
          <div className="experience text-center">
            <p><span className="text-red-600 text-4xl font-extrabold">50+</span><br />FINISHED <br /> PROJECTS</p>
          </div>
          <hr className="border-white/20 h-full" />
          <div className="experience text-center">
            <p><span className="text-red-600 text-4xl font-extrabold">2</span><br />WINNING <br /> AWARDS</p>
          </div>
        </div>
      </div>

      {/* profile section right */}
      <div className=" text-white/70 animate__animated animate__fadeInDown">
        <h1 className="text-red-600 font-semibold underline mt-0">Skills</h1>
        <nav>
          <ul className="list-none p-0 mt-4">
            <li className="mb-2">Web Development</li>
            <li className="mb-2">UI/UX Design</li>
            <li className="mb-2">Graphics Design</li>
            <li className="mb-2">Networking</li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default about