import React from 'react'
import Card from '../card/Card'

const OnWay = () => {
    const data=[
        {
            name:"Big Gamburger",
            amount:1,
            options:['Onion','Cheese']
        },
        {
            name:"Pepsi 0,5",
            amount:4,
            options:[]
        },
        {
            name:"Lavash Standard",
            amount:2,
            options:[]
        },
        {
            name:"Double Burger",
            amount:1,
            options:['No Onion','Cheese']
        }
    ]
  return (
    <div className='p-3'>
        <div className='bg-success-light px-5 py-4 text-white text-2xl font-semibold rounded-t-xl uppercase'>
            Курьер в пути (1)
        </div>

        <div className='bg-gray-100 px-2 py-3 flex flex-col gap-3'>
            <Card payment={'cash'} place={'delivery'} orders={data} variant={'onway'}/>
        </div>
    </div>
  )
}

export default OnWay