import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaHome, FaAlignRight } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const nav = () => {

  //icons and their links of top navbar
  const nav_items = [
    {
      icon: <FaFacebookF />,
      link: 'www.facebook.com'
    },
    {
      icon: <FaInstagram />,
      link: 'www.instagram.com'
    },
    {
      icon: <FaTwitter />,
      link: 'www.twitter.com'
    },
    {
      icon: <FaGithub />,
      link: 'www.github.com'
    },
    {
      icon: <FaLinkedin />,
      link: 'www.linkedin.com'
    }]

  //icons and their links of right navbar
  const rightnav_items = [
    {
      icon: <FaHome />,
      link: '/'
    },
    {
      icon: <IoMdContact />,
      link: '/about'
    },
    {
      icon: <IoCheckmarkDoneCircleSharp />,
      link: '/work'
    },
    {
      icon: <FaAlignRight />,
      link: '/services'
    },
    {
      icon: <GrContact />,
      link: '/contact'
    }]

  return (
    <>
      {/* top-navbar */}
      <nav className='text-white flex justify-between py-6 fixed top-0 lg:px-32 w-[100%] z-50 px-4'>

        {/* name section */}
        <div>
          <h1 className='text-2xl font-semibold'><span className='text-[#E43A33]  '>saurav</span> tiwari<span className='text-[#E43A33]'>.</span></h1>
        </div>

        {/* icons section  */}
        <div className='flex md:gap-6 gap-2 items-center'>
          {nav_items.map((item, index) => {
            return <Link to={item.link} className='text-white text-xl hover:text-[#E43A33] ' key={index}>{item.icon}</Link>
          })
          }
        </div>

      </nav>


      {/* right-navicons */}
      <div className='fixed md:right-[1%] md:bottom-[27%] bottom-5 flex md:flex-col w-fit my-auto bg-[#7b798c3e] rounded-full md:py-5 py-1 z-50'>
        {rightnav_items.map((item, index) => {
          return <Link to={item.link} key={index} className='text-white text-xl px-4 py-4 hover:text-[#E43A33;]'> {item.icon} </Link>
        })}
      </div>


    </>
  )
}

export default nav