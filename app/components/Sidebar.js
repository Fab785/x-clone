import React from 'react'
import { HomeIcon, HashtagIcon, InboxIcon, BookmarkIcon, ClipboardListIcon, BellIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '@/redux/userSlice'
import { closeSignupModal, closeLoginModal } from '@/redux/modalSlice'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase';

function SidebarLink({ text, Icon }) {
    return (
        <li className='hoverAnimation flex mb-3 items-center xl:justify-start justify-center text-xl space-x-3 xl:p-3'>
            <Icon className="h-7" />
            <span className='hidden xl:inline'>{text}</span>
        </li>
    )
}

function Sidebar() {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    async function handleSignOut() {
        await signOut(auth)
        dispatch(signOutUser())
        dispatch(closeSignupModal())
        dispatch(closeLoginModal())
    }

    return (
        <div className='h-full hidden sm:flex flex-col fixed xl:ml-24'>
            <nav className="h-full xl:space-y-1.5 relative">
                <div className='flex xl:justify-start justify-center items-center py-3 xl:p-3'>
                    <Image src="/assets/Bold White _X_ on Black.png" width={34} height={34} />
                </div>
                <SidebarLink Icon={HomeIcon} text={"Home"} />
                <SidebarLink Icon={HashtagIcon} text={"Explore"} />
                <SidebarLink Icon={BellIcon} text={"Notifications"} />
                <SidebarLink Icon={InboxIcon} text={"Messages"} />
                <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
                <SidebarLink Icon={UserIcon} text={"Profile"} />
                <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
                <button className='hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] text-lg font-bold cursor-not-allowed'>
                    Tweet
                </button>
                <div onClick={handleSignOut} className='hover:bg-white hover:bg-opacity-10 rounded-full xl:p-3 cursor-pointer absolute flex justify-center items-center space-x-3 bottom-3'>
                    <img className='ml-3 w-10 h-10 rounded-full object-cover' src={user.photoUrl} />
                    <div className='hidden xl:inline'>
                        <h1 className='font-bold whitespace-nowrap'>{user.name}</h1>
                        <h1 className='text-gray-500'>@{user.username}</h1>
                    </div>
                    <DotsHorizontalIcon className='h-5 hidden xl:inline'/>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar






