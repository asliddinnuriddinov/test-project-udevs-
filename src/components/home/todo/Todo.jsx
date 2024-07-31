import React from 'react'
import Card from '../card/Card'

const Todo = () => {
    const data=[
        {
            name:"Coca cola",
            amount:1,
            options:[]
        },
        {
            name:"Sandwhich",
            amount:3,
            options:[]
        },
        {
            name:"Pepsi",
            amount:2,
            options:[]
        }
    ]
  return (
    <div className='p-3'>
        <div className='bg-main-yellow px-5 py-4 text-white text-2xl font-semibold rounded-t-xl uppercase'>
            Загатовка (3)
        </div>

        <div className='bg-gray-100 px-2 py-3 flex flex-col gap-3'>
            <Card payment={'cash'} place={'delivery'} orders={data} variant={'todo'}/>
            <Card payment={'cash'} place={'delivery'} orders={data} variant={'todo'}/>
            <Card payment={'cash'} place={'delivery'} orders={data} variant={'todo'}/>
            <Card payment={'cash'} place={'delivery'} orders={data} variant={'todo'}/>
            <Card payment={'cash'} place={'delivery'} orders={data} variant={'todo'}/>
            <Card payment={'cash'} place={'delivery'} orders={data} variant={'todo'}/>
            <Card payment={'cash'} place={'delivery'} orders={data} variant={'todo'}/>
        </div>
    </div>
  )
}

export default Todo