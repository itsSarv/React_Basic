import React from 'react'
import Nav from './nav'



const services = () => {

    const content = [
        {
            image: './images/web.jpg',
            content: 'Web Development',
            description: ' Build and optimize your website with cutting-edge technologies and responsive design.'
        },
        {
            image: './images/cloud.jpg',
            content: 'Cloud Computing',
            description: 'Secure and scalable cloud solutions tailored to your business needs.'
        },
        {
            image: './images/digital.jpg',
            content: 'Digital Marketing',
            description: 'Reach your audience with strategic campaigns across digital channels.'
        },
    ]

    return (
        <section className="text-white  relative bg-[#181532] h-[100vh] md:block flex justify-center overflow-hidden">
            <Nav />

            <section className="w-full h-screen flex flex-col justify-center items-center bg-[#181532] px-2 md:px-12">
                <h2 className="md:text-4xl text-2xl font-bold md:mb-14 mb-6 text-center text-[#E43A33] animate__animated animate__backInDown">My Services</h2>
                <div className="flex flex-col md:flex-row justify-center gap-4 animate__animated animate__fadeInDown">
                    {content.map((item, index) => {
                        return <div key={index} className="group relative overflow-hidden w-full md:w-1/3 rounded-lg shadow-lg bg-white">
                            <img
                                src={item.image}
                                alt={item.content}
                                className="w-full md:h-64 h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-semibold mb-2">{item.content}</h3>
                                <p className="text-white text-center px-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </section>


        </section>
    )
}

export default services