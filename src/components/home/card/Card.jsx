import React from 'react'
import { LuInfo } from "react-icons/lu";
import { IoIosCash,IoIosCard  } from "react-icons/io";
import { FaCcPaypal,FaWalking  } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiFillClockCircle } from "react-icons/ai";
import { MdOutlineCancel,MdCheck  } from "react-icons/md";

const Card = ({payment,place,orders,variant}) => {
  return (
    <div className='bg-white'>
        <div className='border-b-[1px] border-b-gray-200'>
            <div className='px-2 py-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <b className='text-xl font-bold uppercase'>
                        id: 321456
                    </b>
                    <LuInfo className='text-xl'/>
                </div>

                <div className='flex items-center gap-4 text-gray-600'>
                    <p className='font-semibold'>
                        300 560 сум
                    </p>

                    {
                        payment=='cash'?
                        <IoIosCash className='text-xl'/>
                        :
                        payment=='card'?
                        <IoIosCard className='text-xl'/>
                        :
                        <FaCcPaypal className='text-xl text-purple-700'/>
                    }

                    {
                        place=='base'?
                        <SiHomeassistantcommunitystore className='text-xl'/>
                        :
                        <FaWalking className='text-xl'/>
                    }
                </div>
            </div>
        </div>


        <div className='px-2 pb-5'>
            {
                orders?.map(x=>
                    <div className='flex items-start font-semibold text-lg gap-1 mt-4'>
                        {x.amount} x  
                        <div>
                            {x.name}
                            {
                                x.options&&x.options.map(data=>
                                    <div className='text-gray-400 -mt-2 text-[14px]'>
                                    {data}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
            <div className='flex items-center justify-end gap-2 text-gray-500'>
                <AiFillClockCircle className='text-xl'/>
                <p className='font-semibold'>15:22</p>
            </div>
        </div>


        <div className='border-t-[1px] border-t-gray-200 pt-3'>
            {
                variant=='new'?
                <div className='flex items-center gap-2 px-5 pb-3'>
                    <button className='text-red-500 flex items-center justify-center gap-2 py-3 border-[1px] border-gray-200 w-full rounded-xl font-semibold text-lg hover:bg-red-500 hover:text-white transition-colors duration-300'>
                        <MdOutlineCancel className='text-2xl'/>
                        Отменить
                    </button>
                    <button className='text-white bg-main-blue flex items-center justify-center gap-2 py-3 border-[1px] w-full rounded-xl font-semibold text-lg hover:opacity-70 transition-opacity duration-300'>
                        <MdCheck className='text-2xl'/>
                        Принять
                    </button>
                </div>
                :
                variant=='todo'?
                <div className='px-5 pb-3'>
                    <button className='text-main-blue flex items-center justify-center gap-2 py-3 border-[1px] border-main-blue w-full rounded-xl font-semibold text-lg hover:bg-main-blue hover:text-white transition-colors duration-300'>
                        <MdCheck className='text-2xl'/>
                        Готово
                    </button>
                </div>
                :
                variant=='ready'?
                <div className='px-5 pb-3'>
                    <button className='text-main-blue flex items-center justify-center gap-2 py-3 border-[1px] border-main-blue w-full rounded-xl font-semibold text-lg hover:bg-main-blue hover:text-white transition-colors duration-300'>
                        Завершить
                    </button>
                </div>
                :null
            }
        </div>
    </div>
  )
}

export default Card