'use client';
import { api } from "@/convex/_generated/api";
import useStoreUserEffect from "@/app/useStoreUserEffect";
import { useQuery } from "convex/react";
import Navbar from "../components/Navbar";

export default () => {
  const userId = useStoreUserEffect();
  const tweets = useQuery(api.backend.getTimelineTweets, userId ? { userId } : 'skip');

  return (
<div className="bg-white">
  <div className="max-w-2xl mx-auto py-8">
    <Navbar userId={userId} />
    <TweetFeed userId={userId} />
  </div>
</div>
