import React from "react";
import contactus from "../public/assets/contact-us.jpg";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          contact
        </h2>
        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white">
          <div className="w-full md:w-1/2 p-4 h-full rounded-xl mt-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me using your preferred
              medium.
            </p>
            <div className="grid grid-cols-2 w-4/5 mx-auto gap-10 h-full">
              <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200">
                <FaLinkedin size={25} />
              </div>
              <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200">
                <FaFacebook size={25} />
              </div>
              <div className="flex items-center justify-center cursor-pointer p-2 rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200">
                <FaGithub size={25} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 h-full rounded-xl">
            <div className=" p-4 text-left">
              <form action="https://getform.io/f/ac23436a-741d-466e-aa73-be94ea08ae63" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-sm capitalize py-2 text-slate-600 font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>
                <div className="flex flex-col">
                  <label className="text-sm capitalize py-2 text-slate-600 font-light">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                  />
                </div>

                <div className="flex flex-col col-span-2">
                  <label className="text-sm capitalize py-2 text-slate-600 font-light">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                  />
                </div>

                

                <div className="flex flex-col">
                  <label className="text-sm capitalize py-2 text-slate-600 font-light">
                    message
                  </label>
                  <textarea name="message" rows="10" 
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200">
                    </textarea>
                </div>
                </div>
        <div className="flex justify-center items-center">
      <button className="my-8 bg-blue-500 px-6 py-3 text-white rounded-md uppercase
       tracking-wider cursor-pointer hover:scale-105 duration-200">
      send message
      </button>
        </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
