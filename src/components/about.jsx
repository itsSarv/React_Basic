import React from 'react'
import Nav from './nav'

const about = () => {
  const about = [
    {
      year: '1+',
      text: 'YEARS OF',
      text_2: 'EXPERIENCE'
    },
    {
      year: '10+',
      text: 'SAITISFIED ',
      text_2: 'CLIENTS'
    },
    {
      year: '50+',
      text: 'FINISHED',
      text_2: 'PROJECTS'
    },
  ]
  return (
    <div className="flex justify-center md:px-0 px-12 items-center min-h-screen gap-12 bg-[#181532]">
      <Nav />

      {/* profile-left */}
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-black sm:text-4xl text-3xl animate__animated animate__backInDown">
          Captivating <span className="text-red-600">stories</span> <br />making cool frontend <br /> designs.
        </h1>

        <p className="text-sm text-white/70 mt-4 animate__animated animate__fadeInDown">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum <br /> eius sapiente numquam a. Sed, odio est quidem officiis error, ex <br /> delectus eum repudiandae corporis quia cupiditate <br /> beatae ipsam nihil rem quos aperiam?
        </p>

        {/* bottom left */}
        <div className=" flex md:gap-8 sm:gap-4 gap-2 text-white/70 font-medium mt-8 animate__animated animate__fadeInDown">
          {about.map((item, index) => {
            return <>
              <div className="text-center">
                <p><span className="text-red-600 text-4xl font-extrabold">{item.year}</span><br />{item.text} <br /> {item.text_2}</p>
              </div>
              <hr className="border-white/20 h-full" />
            </>
          })}
        </div>
      </div>

      {/* profile section right */}
      <div className="md:block hidden text-white/70 animate__animated animate__fadeInDown">
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