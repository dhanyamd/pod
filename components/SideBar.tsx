'use client'
import { sidebarLinks } from '@/app/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const SideBar = () => {
    const pathName = usePathname();
    const router = useRouter()
  return (
    <section className='left_sidebar'>
        <main className='flex flex-col gap-6'>
         <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
         <Image src={'/icons/logo.svg'} alt="logo" width={23} height={27} />
         <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Pod</h1>
         </Link>
         {sidebarLinks.map(({route, label, imgURL}) => {
            const isActive = pathName == route || pathName.startsWith(`${route}/`)
            return <Link href={route} key={label}
             className={cn('flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start', {
                'bg-nav-focus border-r-4 border-lime-400' : isActive
             })}>
            <Image src={imgURL} alt='imageUrl' width={24} height={24}/>
            <p>{label}</p>
            </Link>
         })}
        </main>
    </section>
  )
}

export default SideBar
