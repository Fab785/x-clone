import { DotsHorizontalIcon, SearchIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import React from 'react'

function Trending() {
  return (
    <div className='hidden flex-col lg:flex ml-7 mt-4'>
      <div className='flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl'>
        <SearchIcon className='w-6 text-gray-600' />
        <input className='bg-transparent focus:outline-none placeholder:text-gray-600' placeholder='Search X' />
      </div>

      <div className='w-[300px] h-fit bg-white bg-opacity-10 rounded-3xl mt-3'>
        <h1 className='font-bold text-xl p-3'>What's happening</h1>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>Japan</h1>
          <p className='text-xs text-gray-500'>340K Posts</p>
        </div>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>Apple</h1>
          <p className='text-xs text-gray-500'>140K Posts</p>
        </div>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>Disney</h1>
          <p className='text-xs text-gray-500'>30K Posts</p>
        </div>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>IU</h1>
          <p className='text-xs text-gray-500'>75K Posts</p>
        </div>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>Anime</h1>
          <p className='text-xs text-gray-500'>10K Posts</p>
        </div>
      </div>

      <div className='w-[300px] h-fit bg-white bg-opacity-10 rounded-3xl mt-3'>
        <h1 className='font-bold text-xl p-3'>Who to follow</h1>
        <div className='flex justify-between p-3 items-center'>
          <div className='flex space-x-3 p-3'>
            <img className="w-11 h-11 object-cover rounded-full" src="/assets/profilepic.jpg" />
            <div>
              <div className='flex space-x-1'>
                <h1 className='font-bold'>Fabrizio</h1>
                <BadgeCheckIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className='text-[12px] text-gray-500 mt-1'>@Fab85</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 cursor-not-allowed'>Follow</button>
        </div>
        <div className='flex justify-between p-3 items-center'>
          <div className='flex space-x-3 p-3'>
            <img className="w-11 h-11 object-cover rounded-full" src="/assets/profilepic.jpg" />
            <div>
              <div className='flex space-x-1'>
                <h1 className='font-bold'>Fabrizio</h1>
                <BadgeCheckIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className='text-[12px] text-gray-500 mt-1'>@Fab85</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 cursor-not-allowed'>Follow</button>
        </div>
        <div className='flex justify-between p-3 items-center'>
          <div className='flex space-x-3 p-3'>
            <img className="w-11 h-11 object-cover rounded-full" src="/assets/profilepic.jpg" />
            <div>
              <div className='flex space-x-1'>
                <h1 className='font-bold'>Fabrizio</h1>
                <BadgeCheckIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className='text-[12px] text-gray-500 mt-1'>@Fab85</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 cursor-not-allowed'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Trending