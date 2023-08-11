"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/islam2.png'
import Link from 'next/link'
import { CustomButton } from './CustomButton'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { IoMenu, IoClose } from 'react-icons/io5'

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
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <nav className='z-50 sticky w-full top-0 right-0 left-0 grid grid-cols-8 bg-green items-center text-white border-b-2 border-greenDark py-10 lg:py-2'>
            <div className='flex justify-between items-center p-4 col-span-2 font-semibold'>
                <Link href={'/'} className='flex items-center gap-2 md:text-lg xl:text-xl w-full'>
                    <Image src={logo} alt={''} width={50} />
                    <span className='whitespace-nowrap'>Aplikasi Al-Qur`an</span>
                </Link>
            </div>
            <ul id='navlist' className='col-span-4 flex justify-center gap-5 max-lg:hidden'>
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
            <div id='menu' className='lg:hidden col-span-2 col-start-6 text-4xl flex justify-end text-white'>
                {
                    !isOpen && <div onClick={() => setIsOpen(true)}>
                        <IoMenu />
                    </div>
                }
            </div>
            {
                isOpen && (
                    <div className='flex flex-col absolute bg-greenDark bg-opacity-50 bottom-0 left-0 w-full top-0 justify-around items-center lg:hidden'>
                        {
                            navList.map((item) => {
                                return (
                                    <Link href={item.url} key={item.name}>{item.name}
                                    </Link>
                                )
                            })
                        }
                        <button
                            onClick={() => setIsOpen(false)}
                            className='text-2xl'>
                            <IoClose />
                        </button>
                    </div>
                )
            }

        </nav>
    )
}
