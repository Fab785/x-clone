'use client'

import React, { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import { useSelector, useDispatch } from 'react-redux';
import { openSignupModal, closeSignupModal } from '@/redux/modalSlice';
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    updateProfile, 
    signInAnonymously 
} from 'firebase/auth';
import { auth } from '@/firebase';
import { setUser } from '@/redux/userSlice';

const GUEST_USER = {
  name: "Guestoso",
  username: "guest",
  photoUrl: "/assets/profilepictures/profile1.PNG",
  uid: "guest"
}

function SignupModal() {
    const isOpen = useSelector(state => state.modals.signupModalOpen);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // Handle normal sign up
    async function handleSignUp() {
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const url = `/assets/profilepictures/profile1.PNG`; // fixed image for now

        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        });

        dispatch(setUser({
          name: name,
          username: email.split("@")[0],
          photoUrl: url,
          uid: auth.currentUser.uid,
          email: email
        }));

        dispatch(closeSignupModal());
    }

    // Handle guest sign in
    async function handleGuestSignIn() {
        await signInAnonymously(auth);

        await updateProfile(auth.currentUser, {
            displayName: GUEST_USER.name,
            photoURL: GUEST_USER.photoUrl
        });

        dispatch(setUser(GUEST_USER));
        dispatch(closeSignupModal());
    }

    // Listen for auth changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) return;
            dispatch(setUser({
                username: currentUser.displayName || "Guestoso",
                name: currentUser.displayName || "Guestoso",
                email: currentUser.email || "guest@x-clone.com",
                uid: currentUser.uid,
                photoUrl: currentUser.photoURL || "/assets/profilepictures/profile1.PNG"
            }));
        });
        return unsubscribe;
    }, [dispatch]);

    return (
        <>
            <button onClick={() => dispatch(openSignupModal())} className='bg-white border text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]'>Sign Up</button>
            <Modal open={isOpen} onClose={() => dispatch(closeSignupModal())} className='flex justify-center items-center'>
                <div className='w-[90%] h-fit bg-black text-white md:w-[560px] md:h[600px] border border-gray-700 rounded-lg flex justify-center'>
                    <div className='w-[90%] mt-8 flex flex-col'>
                        <h1 className='mt-4 font-bold text-4xl'>Create your Account</h1>
                        <input className='h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8' placeholder='Full Name' type="text" onChange={e => setName(e.target.value)} />
                        <input className='h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8' placeholder='Email' type="email" onChange={e => setEmail(e.target.value)} />
                        <input className='h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8' placeholder='Password' type="password" onChange={e => setPassword(e.target.value)} />
                        <button className='bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md' onClick={handleSignUp}>Create Account</button>
                        <h1 className='text-center font-bold text-lg mt-4'>or</h1>
                        <button className='bg-white text-black w-full font-bold text-lg p-2 mt-4 mb-8 rounded-md' onClick={handleGuestSignIn}>Sign In as Guest</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default SignupModal

