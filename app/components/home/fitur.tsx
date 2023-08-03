/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import { CustomButton } from '@/app/components/CustomButton'
import { motion } from 'framer-motion'
import img1 from '@/public/quran1.svg'
import img2 from '@/public/quran2.svg'
import img3 from '@/public/quran3.svg'
import React from 'react'

const Fitur = () => {
    return (
        <section id='fitur' className='grid grid-cols-10 w-full text-greenDark mt-32 bg-white px-20'>
            <div className='col-span-7 p-20'>
                <h1 className='text-3xl font-semibold py-5'>Baca Al-Qur'an</h1>
                <p className='text-xl'>Aplikasi Al-Qur'an ini menampilkan surah-surah ayat suci dengan jelas dan mudah dibaca secara online. Nikmati kemudahan membaca Al-Quran dengan fitur navigasi yang menarik beserta tafsir yang memudahkan sebagai <span className='italic'>mubayyin</span> (pemberi penjelasan), menjelaskan tentang arti dan kandungan Al-Qur'an, khususnya menyangkut ayat-ayat yang tidak di pahami dan samar artinya.
                </p>
            </div>
            <div className='col-span-3 flex bg-green p-16 rounded-b-2xl'>
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
                >
                    <Image src={img3} alt={''} style={{ width: '80%' }} />
                </motion.div>
            </div>
            <div className='col-span-3 flex bg-green p-16 rounded-2xl'>
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
                >
                    <Image src={img2} alt={''} style={{ width: '80%' }} />
                </motion.div>
            </div>
            <div className='col-span-7 p-20 '>
                <h1 className='text-3xl font-semibold py-5'>Murrotal Al-qur'an</h1>
                <p className='text-xl'>Dengarkan Bacaan Al-Quran
                    Rasakan keindahan dan ketenangan dalam mendengarkan bacaan Al-Quran yang terkaji dengan baik. Kami menawarkan koleksi bacaan dari qari terkenal yang akan membawa hati Anda dekat dengan ayat-ayat-Nya.
                </p>
            </div>
            <div className='col-span-7 p-20'>
                <h1 className='text-3xl font-semibold py-5'>Kemudahan Pencarian</h1>
                <p className='text-xl'>Temukan ayat-ayat Al-Quran yang Anda cari dengan mudah melalui fitur pencarian kami. Ketikkan kata kunci, nama surah, atau nomor ayat yang ingin Anda temukan, dan kami akan menampilkan hasil pencarian yang relevan.
                </p>
            </div>
            <div className='col-span-3 flex bg-green p-16 rounded-t-2xl'>
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
                >
                    <Image src={img1} alt={''} style={{ width: '80%' }} />
                </motion.div>
            </div>
        </section>
    )
}

export default Fitur