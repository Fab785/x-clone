import { DotsHorizontalIcon, SearchIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import React from 'react'

function Trending() {
  return (
    <div className='hidden flex-col lg:flex ml-7 mt-4'>
      <div className='flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl'>
        <SearchIcon className='w-6 text-gray-600' />
        <input className='bg-transparent focus:outline-none placeholder:text-gray-600' placeholder='Search Twitter' />
      </div>

      <div className='w-[300px] h-fit bg-white bg-opacity-10 rounded-3xl mt-3'>
        <h1 className='font-bold text-xl p-3'>What's happening</h1>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>China</h1>
          <p className='text-xs text-gray-500'>340K Tweets</p>
        </div>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>Apple</h1>
          <p className='text-xs text-gray-500'>140K Tweets</p>
        </div>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>Elon Musk</h1>
          <p className='text-xs text-gray-500'>30K Tweets</p>
        </div>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>IU</h1>
          <p className='text-xs text-gray-500'>75K Tweets</p>
        </div>
        <div className='p-3 relative'>
          <DotsHorizontalIcon className='w-5 text-gray-600 absolute right-4' />
          <p className='text-xs text-gray-500'>Trending in US</p>
          <h1 className='text-[15px] font-bold'>Anime</h1>
          <p className='text-xs text-gray-500'>10K Tweets</p>
        </div>
      </div>

      <div className='w-[300px] h-fit bg-white bg-opacity-10 rounded-3xl mt-3'>
        <h1 className='font-bold text-xl p-3'>Who to follow</h1>
        <div className='flex justify-between p-3 items-center'>
          <div className='flex space-x-3 p-3'>
            <img className="w-11 h-11 object-cover rounded-full" src="/assets/profilepic.jpg" />
            <div>
              <div className='flex space-x-1'>
                <h1 className='font-bold'>David Lee</h1>
                <BadgeCheckIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className='text-[12px] text-gray-500 mt-1'>@dvdlee</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 cursor-not-allowed'>Follow</button>
        </div>
        <div className='flex justify-between p-3 items-center'>
          <div className='flex space-x-3 p-3'>
            <img className="w-11 h-11 object-cover rounded-full" src="/assets/profilepic.jpg" />
            <div>
              <div className='flex space-x-1'>
                <h1 className='font-bold'>David Lee</h1>
                <BadgeCheckIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className='text-[12px] text-gray-500 mt-1'>@dvdlee</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 cursor-not-allowed'>Follow</button>
        </div>
        <div className='flex justify-between p-3 items-center'>
          <div className='flex space-x-3 p-3'>
            <img className="w-11 h-11 object-cover rounded-full" src="/assets/profilepic.jpg" />
            <div>
              <div className='flex space-x-1'>
                <h1 className='font-bold'>David Lee</h1>
                <BadgeCheckIcon className='w-[18px] text-blue-400' />
              </div>
              <h1 className='text-[12px] text-gray-500 mt-1'>@dvdlee</h1>
            </div>
          </div>
          <button className='bg-white text-black text-sm w-20 rounded-3xl font-bold h-8 cursor-not-allowed'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Trending