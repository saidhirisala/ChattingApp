import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import ChatContainer from '../Components/ChatContainer'
import RightSidebar from '../Components/RightSidebar'

const HomePage = () => {

    const [selectedUser,setselectedUser]=useState(false)
  return (
    <div className='border w-ful h-screen sm:px-[15%] sm:py-[5%]'>
    <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl
            overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grids-cols-[1fr_1.5fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2' }`}>
        <SideBar/>
        <ChatContainer/>
        <RightSidebar selectedUser={selectedUser} setselectedUser={setselectedUser}/>
    </div>
    </div>
  )
}

export default HomePage
