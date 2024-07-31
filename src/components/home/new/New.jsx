import React from 'react'
import Card from '../card/Card'

const New = () => {
    const data=[
        {
            name:"Burger",
            amount:4,
            options:['Sause',"Cheese"]
        },
        {
            name:"Coke",
            amount:4,
            options:[]
        },
        {
            name:"Sandwich",
            amount:4,
            options:['Sause',"Cheese"]
        }
    ]
  return (
    <div className='p-3'>
        <div className='bg-main-blue px-5 py-4 text-white text-2xl font-semibold rounded-t-xl uppercase'>
            Новый (2)
        </div>

        <div className='bg-gray-100 px-2 py-3 flex flex-col gap-3'>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
            <Card payment={'online'} place={'base'} orders={data} variant={'new'}/>
        </div>
    </div>
  )
}

export default New