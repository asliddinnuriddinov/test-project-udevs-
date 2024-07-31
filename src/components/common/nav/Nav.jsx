import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";
import { PiListChecksFill } from "react-icons/pi";
import { AiOutlineClockCircle } from "react-icons/ai";

const Nav = () => {
    const [select,setSelect]=useState('')
  return (
    <div className=''>
        <div className='p-5 text-3xl font-bold'>
            <p>
                Сегодняшние заказы
            </p>
        </div>

        <div className='border-t-[1px] border-t-gray-200 p-5 flex items-center justify-between'>
            <div className='border-[1px] border-gray-200 overflow-hidden rounded-md h-[40px] w-[300px] flex items-center pl-3 gap-2'>
                <MdSearch className='text-main-blue text-3xl'/>

                <form className='w-full h-full'>
                    <input className='outline-none bg-none h-full w-full placeholder:text-lg' type="text" placeholder='Поиск по ID'/>
                </form>
            </div>

            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-3 border-[1px] border-gray-200 h-[40px] rounded-md w-fit px-2'>
                    <PiListChecksFill className='text-main-blue text-3xl'/>
                    <select value={select} className='font-semibold text-lg w-[110px] outline-none'>
                        <option value="" disabled hidden defaultValue={true}>Всего: 115</option>
                    </select>
                </div>

                <div className='flex items-center gap-3 border-[1px] border-gray-200 h-[40px] rounded-md w-fit px-2'>
                    <AiOutlineClockCircle className='text-main-blue text-2xl font-semibold'/>
                    <p className='font-semibold text-lg'>
                        45:08
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav