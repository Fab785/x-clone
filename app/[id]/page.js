'use client'

import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Trending from '../components/Trending'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { db } from '@/firebase'
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import Moment from 'react-moment'
import Link from 'next/link'
import { useSelector } from 'react-redux'

function CommentsPage({ params }) {

    const [tweetData, setTweetData] = useState();
    const user = useSelector(state => state.user);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    async function getComments() {
        const data = await getDoc(doc(db, "tweets", params.id));
        setTweetData(data.data());
    }

    useEffect(() => {
        getComments();

        const unsubscribe = onSnapshot(doc(db, "tweets", params.id), (doc) => {
            setComments(doc.data().comments)
        })

        return unsubscribe;
    }, []);


    async function sendComment() {

        const docRef = doc(db, "tweets", params.id);
        const commentDetails = {
            username: user.username,
            name: user.name,
            photoUrl: user.photoUrl,
            comment: comment
        }
        await updateDoc(docRef, {
            comments: arrayUnion(commentDetails)
        })

        setComment("");
    }

    return (
        <div>
            <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex">
                <Sidebar />
                <div className='sm:ml-16 xl:ml-80 max-w-2xl flex-grow border-gray-700 border-x'>
                    <div className='px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-60 flex space-x-2'>
                        <Link href={"/"}>
                            <ArrowLeftIcon className='w-7 cursor-pointer' />
                        </Link>
                        <h1>Post</h1>
                    </div>

                    {/* Head Tweet */}
                    <div className='border-b border-gray-700'>
                        <div className='flex space-x-3 p-3 border-gray-700'>
                            <img
                                className='w-11 h-11 rounded-full object-cover'
                                src={tweetData?.photoUrl} />
                            <div>
                                <div className='flex space-x-2 items-center text-gray-500 mb-1'>
                                    <h1 className='text-white font-bold'>{tweetData?.name}</h1>
                                    <span>@{tweetData?.username}</span>
                                    <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                    <Moment fromNow>
                                        {tweetData?.timestamp?.toDate()}
                                    </Moment>
                                </div>
                                <span className='text-2xl'>{tweetData?.tweet}</span>

                                {tweetData?.image && <img className='object-cover rounded-md mt-3 max-h-80 border border-gray-700 ' src={tweetData?.image} />}
                            </div>
                        </div>
                    </div>

                    {/* Reply */}
                    <div className='flex justify-between border-b border-gray-700 p-2 items-center'>
                        <div className='flex justify-center items-center w-full'>
                            <img src={user.photoUrl} className='w-12 h-12 rounded-full object-cover p-1 space-x-2' />
                            <textarea className='text-2xl w-full bg-transparent resize-none outline-none ml-2 h-[35px]' placeholder='Post your reply' onChange={e => setComment(e.target.value)} value={comment} />
                        </div>
                        <button className='bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50' onClick={sendComment} disabled={!comment}>
                            Post
                        </button>
                    </div>

                    {/* Comments */}
                    {comments?.map(comment => (
                        <div className='border-b border-gray-700'>
                            <div className='flex space-x-3 p-3 border-gray-700'>
                                <img
                                    className='w-11 h-11 rounded-full object-cover'
                                    src={comment.photoUrl} />
                                <div>
                                    <div className='flex space-x-2 items-center text-gray-500 mb-1'>
                                        <h1 className='text-white font-bold'>{comment.name}</h1>
                                        <span>@{comment.username}</span>
                                        <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                        {/* Comment dats to be implemented */}
                                        {/* <Moment fromNow>
                                            {comment.timestamp?.toDate()}
                                        </Moment> */}
                                    </div>
                                    <span className='text-2xl'>{comment.comment}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <Trending />
            </div>
        </div>
    )
}

export default CommentsPage