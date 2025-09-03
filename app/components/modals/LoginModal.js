'use client'

import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import { useSelector, useDispatch } from 'react-redux';
import { openLoginModal, closeLoginModal } from '@/redux/modalSlice';
import { signInWithEmailAndPassword, signInAnonymously, updateProfile } from 'firebase/auth';
import { auth } from '@/firebase';

function LoginModal() {
    const isOpen = useSelector(state => state.modals.loginModalOpen);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignIn() {
        await signInWithEmailAndPassword(auth, email, password)
    }

    async function handleGuestSignIn() {
        // Sign in anonymously
        const userCredentials = await signInAnonymously(auth);

        // Assign a fake display name and profile picture
        const url = `/assets/profilepictures/profile${Math.ceil(Math.random()*5)}.PNG`;
        await updateProfile(auth.currentUser, {
            displayName: "Guest",
            photoURL: url
        });
    }

    return (
        <>
            <button onClick={() => dispatch(openLoginModal())} className='bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7] hover:text-black'>Log In</button>
            <Modal open={isOpen} onClose={() => dispatch(closeLoginModal())} className='flex justify-center items-center'>
                <div className='w-[90%] h-fit bg-black text-white md:w-[560px] md:h[600px] border border-gray-700 rounded-lg flex justify-center'>
                    <div className='w-[90%] mt-8 flex flex-col'>
                        <h1 className='mt-4 font-bold text-4xl'>Sign in to your account</h1>
                        <input className='h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8' placeholder='Email' type="email" onChange={e => setEmail(e.target.value)}/>
                        <input className='h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8' placeholder='Password' type="password" onChange={e => setPassword(e.target.value)}/>
                        <button className='bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md' onClick={handleSignIn}>Login</button>
                        <h1 className='text-center font-bold text-lg mt-4'>or</h1>
                        <button className='bg-white text-black w-full font-bold text-lg p-2 mt-4 mb-8 rounded-md' onClick={handleGuestSignIn}>Sign In as Guest</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default LoginModal
