'use client'

import React from "react";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/PostFeed";
import Trending from "./components/Trending";
import Banner from "./components/Banner";
import { useSelector } from "react-redux";
import CommentModal from "./components/modals/CommentModal";

export default function Home() {

  const username = useSelector(state => state.user.username);

  return (

    <div>
      <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex">
        <Sidebar />
        <PostFeed />
        <Trending />
      </div>
      <CommentModal />
      {!username && <Banner />}
    </div>
  );
}
