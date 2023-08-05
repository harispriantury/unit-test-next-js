"use client"
import React from 'react'
import Image from 'next/image'
import logo from '@/public/islam2.png'
import Link from 'next/link'
import { CustomButton } from './CustomButton'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface INavList {
    name: string
    url: string
}

const navList: INavList[] = [
    {
        name: 'Halaman Utama',
        url: '/'
    },
    {
        name: `Al-Qur'an`,
        url: '/quran'
    },
    {
        name: 'Jadwal Sholat',
        url: '/jadwal'
    }
]

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className='z-50 sticky w-full top-0 right-0 left-0 grid grid-cols-8 bg-green items-center mx-auto text-white border-b-2 border-greenDark'>
            <div className='flex justify-between items-center p-4 col-span-2 font-semibold'>
                <Link href={'/'} className='flex items-center gap-2 text-2xl'>
                    <Image src={logo} alt={''} width={50} />
                    <span>Aplikasi Al-Qur`an</span>
                </Link>
            </div>
            <ul id='navlist' className='col-span-4 flex justify-center gap-5'>
                {
                    navList.map((item: INavList) => {
                        return (
                            <li key={item.name} className='text-xl'>
                                <Link href={item.url} className={`relative ${pathname === item.url ? 'opacity-100' : 'opacity-80'}`}>
                                    {item.name}
                                    {
                                        pathname === item.url && (
                                            <motion.span
                                                layoutId="underline"
                                                className="absolute block h-[0.5px] w-full bg-white"
                                            />
                                        )
                                    }
                                </Link>
                            </li>

                        )
                    })
                }

            </ul>
            <div className='col-span-2 flex justify-end'>
                <CustomButton text='login' style='' />
            </div>
        </nav>
    )
}
