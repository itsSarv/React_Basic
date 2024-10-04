import React from 'react'
import Nav from './nav'


const contact = () => {
  return (
    <div>
      <section className="text-white w-screen  relative bg-[#181532] h-[100vh] md:block flex justify-center">

        <Nav />

        <div className="px-5 py-24 mx-auto">

          {/* Heading */}
          <div className="flex flex-col text-center w-full mb-12 animate__animated animate__fadeInUp">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#E43A33]">Contact Me</h1>
          </div>

          {/* contact div */}
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

              {/* name text area section */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-200">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              {/* email text area section */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-200">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>

              {/* message text area section */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-gray-200">Message</label>
                  <textarea id="message" name="message" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>

              {/* submit button */}
              <div className="p-2 w-full animate__animated animate__fadeInDown">
                <button className="flex mx-auto text-white bg-[#E43A33] border-0 hover:border-cyan-800  py-2 px-8 focus:outline-none hover:bg-[#181532] rounded text-lg">Submit</button>
              </div>

            </div>
          </div>

        </div>

      </section>

    </div>
  )
}

export default contact