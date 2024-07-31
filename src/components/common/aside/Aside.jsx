import React from 'react'
import { RiLayoutVerticalFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

const Aside = () => {
  return (
    <div className='border-r-[1px] border-r-gray-200 p-5 flex flex-col justify-between'>
        <div className='flex flex-col items-center gap-6'>
            <div className='rounded-full w-[40px] h-[40px] bg-main-blue p-1 text-white text-xl font-bold flex items-center justify-center'>
                <p>D</p>
            </div>

            <button className='bg-main-blue rounded-md w-[40px] h-[40px] flex items-center justify-center text-2xl text-white'>
                <RiLayoutVerticalFill/>
            </button>
        </div>

        <div className='flex flex-col items-center gap-8'>
            <button className='text-3xl text-gray-500 flex items-center justify-center'>
                <IoMdSettings/>
            </button>

            <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center text-2xl border-[1px] border-gray-400'>
                <FaUser/>
            </div>
        </div>
    </div>
  )
}

export default Aside