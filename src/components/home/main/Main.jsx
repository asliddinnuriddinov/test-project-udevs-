import React from 'react'
import New from '../new/New'
import Todo from '../todo/Todo'
import Ready from '../ready/Ready'
import OnWay from '../onway/OnWay'

const Main = () => {
  return (
    <div className='h-full overflow-y-scroll'>
        <div className='grid grid-cols-4'>
            <New/>
            <Todo/>
            <Ready/>
            <OnWay/>
        </div>
    </div>
  )
}

export default Main