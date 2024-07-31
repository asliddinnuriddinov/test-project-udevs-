import React from 'react'
import Aside from '../../components/common/aside/Aside'
import Nav from '../../components/common/nav/Nav'
import Main from '../../components/home/main/Main'

const Home = () => {
  return (
    <div className='flex'>
        <Aside/>
        <div className='flex flex-col justify-between h-[100vh] w-full'>
            <Nav/>
            <Main/>
        </div>
    </div>
  )
}

export default Home