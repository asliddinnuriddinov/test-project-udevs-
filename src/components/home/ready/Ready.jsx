import React from 'react'
import Card from '../card/Card'

const Ready = () => {
    const data=[
        {
            name:"Lavash",
            amount:2,
            options:[]
        }
    ]
  return (
    <div className='p-3'>
        <div className='bg-success-heavy px-5 py-4 text-white text-2xl font-semibold rounded-t-xl uppercase'>
            Готов (4)
        </div>

        <div className='bg-gray-100 px-2 py-3 flex flex-col gap-3'>
            <Card payment={'card'} place={'base'} orders={data} variant={'ready'}/>
            <Card payment={'card'} place={'base'} orders={data} variant={'ready'}/>
            <Card payment={'card'} place={'base'} orders={data} variant={'ready'}/>
            <Card payment={'card'} place={'base'} orders={data} variant={'ready'}/>
        </div>
    </div>
  )
}

export default Ready