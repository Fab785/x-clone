'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function TweetInput() {
  const user = useSelector(state => state.user)
  const [tweet, setTweet] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!tweet.trim()) return

    await addDoc(collection(db, 'tweets'), {
      tweet: tweet,
      image: imageUrl || null,
      name: user.name || 'Guest User',
      username: user.username || 'guest',
      photoUrl: user.photoUrl || '/assets/profilepictures/profile1.PNG',
      uid: user.uid || 'guest',
      likes: [],
      comments: [],
      timestamp: serverTimestamp()
    })

    setTweet('')
    setImageUrl('')
  }

  return (
    <div className='p-3 border-b border-gray-700'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
        <textarea
          className='w-full bg-black text-white p-3 rounded-md border border-gray-700 resize-none'
          placeholder="What's happening?"
          value={tweet}
          onChange={e => setTweet(e.target.value)}
        />
        <input
          className='w-full bg-black text-white p-2 rounded-md border border-gray-700'
          placeholder="Optional: image URL"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-full self-end hover:bg-blue-600'
        >
          Tweet
        </button>
      </form>
    </div>
  )
}
