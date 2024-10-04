import React from 'react'
import Nav from './nav'
import { FaArrowRight, FaCropAlt, FaEdit, FaRegCheckCircle } from "react-icons/fa";


const services = () => {

    const services = [
        {
            icon: <FaCropAlt />,
            name: 'Branding',
            description: 'Lorem ipsum dolor sit consectetur adipisicing  elit Minus!'
        },
        {
            icon: <FaEdit />,
            name: 'Design',
            description: 'Lorem ipsum dolor sit consectetur adipisicing elit Minus!'
        },
        {
            icon: <FaRegCheckCircle />,
            name: 'Development',
            description: 'Lorem ipsum dolor sit consectetur adipisicing elit Minus!'
        }
    ]

    return (
        <div className="flex lg:flex-row flex-col  justify-center items-center min-h-screen gap-16   text-white bg-[#181532]">

            <Nav />

            {/* Left Section */}
            <div className="service-left animate__animated animate__fadeInDown">
                <h1 className="text-4xl mb-4">
                    My <span className="text-red-600">Services</span>.
                </h1>
                <p className="text-sm text-white/70">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum <br /> eius sapiente numquam a. Sed, odio est quidem officiis error, ex <br /> delectus eum repudiandae corporis quia cupiditate.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex lg:justify-normal lg:px-0 px-2 justify-evenly lg:gap-8 gap-4 text-white/70 md:w-[60%] animate__animated animate__fadeInDown    ">
                {services.map((item, index) => {
                    return <div className="branding bg-white/5 md:p-8 p-4 hover:bg-white/10">
                        <div className=" text-red-600 text-xl hover:text-white my-4">{item.icon}</div>
                        <h2 className="text-xl mb-4">{item.name}</h2>
                        <p>{item.description}</p>
                        <div className=" text-red-600 text-xl hover:text-white mt-4"> <FaArrowRight /> </div>
                    </div>
                })}




            </div>
        </div>

    )
}

export default services