import React from 'react'
import { SiFacebook } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";

const Footer = () => {
  return (
    <div className='min-[1000px]:h-28 mx-4 max-[600px]:text-sm bg-[#ec3336] text-white'>
      <div className='flex max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center gap-4 py-4 justify-around'>
        <p className='flex gap-2 items-center'> <MdCall className='text-2xl text-[#ec3336] rounded-full p-1 bg-white' />Toll free 1800 200 1234</p>
        <p className='flex gap-2 items-center'><SiFacebook className='text-2xl' />www.facebook.com/cripumps</p>
        <p className='flex gap-2 items-center'><IoIosGlobe className='text-2xl' />www.crigroups.com</p>
      </div>
    </div>
  )
}

export default Footer