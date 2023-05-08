import React from 'react'
import heroImage from '../public/assets/heroImage.png'
import Image from 'next/image'
import {MdExpandMore} from 'react-icons/md'
import Link from 'next/link'
const Homepage = () => {
  return (
    <div className="h-screen w-full text-center">
      <div className="max-w-screen-xl h-full w-full pt-24 p-4 flex flex-col items-center justify-around">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-lg">
          <Image src={heroImage} alt='me'/>
        </div>
        <h1 className="uppercase font-bold text-gray-700 text-5xl">full stack developer</h1>
         <p className="text-gray-600 text-xl max-w-sm mx-auto">
          I have 8 years of experience building and desgining software.
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next JS and GraphQL.
        </p>
        <Link href="/#me">
          <div className="group flex bg-blue-500 text-white items-center justify-center px-6 py-2 font-bold uppercase rounded-md tracking-wider my-3">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25}/>
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
