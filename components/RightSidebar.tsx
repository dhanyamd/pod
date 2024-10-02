'use client'
import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from './Header'
import Carousel from './Carousel'

const RightSidebar = () => {
  const {user} = useUser()
  return (
    <div className='right_sidebar text-white-1'>
       <SignedIn>
       <Link href={`/profile/${user?.id}`} className="flex gap-3 pb-12">
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-semibold text-white-1">{user?.firstName} {user?.lastName}</h1>
            <Image 
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
       </SignedIn>
       <section>
        <Header headerTitle='Fans like you'/>
        <Carousel/>
       </section>
    </div>
  )
}

export default RightSidebar
