/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { CustomButton } from '../CustomButton'

const Hero = () => {
    return (
        <section id='welcome' className='flex flex-col items-center text-greenDark text-center gap-3'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 1 } }}
            >
                <h1 className='text-5xl pt-28'>"Bagaimana <span className='text-6xl font-semibold'>Al-Qur'an</span> di hati kita"</h1>
                <p className='text-2xl'>Orang yang membaca Alquran seakan sedang mendapat kehormatan bermunajat dengan Allah SWT,<br /> sekaligus seperti seorang prajurit yang menerima perintah dari atasan</p>

            </motion.div>

            <div className='bg-white py-20 px-10 rounded-3xl border-t-8 border-l-8 border-green mt-10 shadow-2xl'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                    exit={{ opacity: 0, x: 50 }}
                >
                    <h2 className='text-4xl'>
                        وَاِذَا قُرِئَ الْقُرْاٰنُ فَاسْتَمِعُوْا لَهٗ وَاَنْصِتُوْا لَعَلَّكُمْ تُرْحَمُوْنَ
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                    exit={{ opacity: 0, x: -50 }}
                >
                    <p className='text-xl italic font-bold py-5'>"Dan apabila dibacakan Al-Qur'an, maka dengarkanlah dan diamlah, agar kamu mendapat rahmat."</p>

                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } }}
                exit={{ opacity: 0, x: 50 }}
                whileHover={{ scale: 1.05 }}
            >
                <CustomButton
                    text='Mulai Membaca'
                    style='bg-yellow rounded-2xl font-semibold mt-5'
                />
            </motion.div>
        </section>
    )
}

export default Hero