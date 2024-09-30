import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
export interface PodcastCardProps {
    imgUrl: string;
    title: string;
    description: string;
    podcastId: string 
  }
  
const PodcastCard = ({
    imgUrl, title, description, podcastId
  }: PodcastCardProps) =>{
    const router = useRouter();

    const handleViews = () => {
   
      router.push(`/podcast/${podcastId}`, {
        scroll : true
      })
    }

  return (
    <div className='cursor-pointer' onClick={handleViews}>
   <figure className='flex flex-col gap-2'>
   <Image 
   src={imgUrl}
   width={174}
   height={174}
   alt={title}
   className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'
   />
   <div className='flex flex-col'>
    <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
    <h1 className='text-12 font-normal truncate capitalize text-white-4'>{description}</h1>
   </div>
   </figure>
    </div>
  )
}

export default PodcastCard
