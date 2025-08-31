import React from 'react'
import assets from '../assets/assets'

const RightSidebar = ({ selectedUser }) => {
  return selectedUser && (
    <div className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll
        ${selectedUser ? 'max-md:hidden' : ''}`}>
      <div className='pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto'>
        <img
          src={selectedUser?.profilePic || assets.avatar_icon}
          alt=""
          className='w-20 aspect-[1/1] rounded-full'
        />
        <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
          <p className='w-2 h-2 rounded-full bg-green-500'></p>
          {selectedUser.fullName}
        </h1>
        <p className='px-10 mx-auto'>{selectedUser.bio}</p>
      </div>

      <button
        className='absolute bottom-5 left-1/2 transform -translate-x-1/2
       bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none
       text-sm font-light py-2 px-5 rounded-full cursor-pointer'>
        Logout
      </button>
    </div>
  )
}

export default RightSidebar
