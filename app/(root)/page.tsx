"use client";
import React from 'react'
import { podcastData } from '@/constants'
import PodcastCard from '@/components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from '@/convex/_generated/api';

const Home = () => {
  return (
    <div className='flex flex-col gap-9 mt-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>
        <div className='podcast_grid'>
          {podcastData.map(({ id, title, description, imgURL }) => (
            <PodcastCard
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
