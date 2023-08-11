/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from 'react'
import Search from '../components/quran/search';
import Link from 'next/link';
import { IDataSurah } from '../interfaces/surah';
import { motion } from 'framer-motion'


const Quran = () => {
    const [surah, setSurah] = useState<IDataSurah[] | null>(null);
    const [allSurah, setAllSurah] = useState<IDataSurah[] | null>(null);

    const getFullSurah = async () => {
        try {
            const response = await fetch("https://equran.id/api/v2/surat")
            const result = await response.json();
            setSurah(result.data as IDataSurah[])
            setAllSurah(result.data as IDataSurah[])
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const useFilter = (key: string) => {
        if (key === "") {
            setSurah(allSurah);
            return
        }
        const newValue = allSurah?.filter((item) => item.namaLatin.toLocaleLowerCase().includes(key.toLocaleLowerCase()) || String(item.nomor).includes(String(key)))
        if (newValue && newValue?.length > 0) {
            setSurah(newValue as IDataSurah[])
        } else {
            setSurah(null)
        }
    }
    useEffect(() => {
        getFullSurah()
    }, [])
    return (
        <main>
            <Search handleChange={useFilter} />
            <section id='surah' className='bg-white min-h-[380px] rounded-t-3xl mt-5 flex flex-col items-center p-8'>
                {
                    surah && surah?.length > 0 ? (
                        <div className=' grid grid-cols-3 max-xl:grid-cols-2 gap-3 w-5/6 max-md:grid-cols-1 text-white'>
                            {
                                surah?.map((item) => {
                                    return (
                                        <Link key={item.nomor} href={`detail/${item.nomor}`} >
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
                                                exit={{ scale: 0, opacity: 0 }}
                                            >

                                                <div
                                                    className='bg-green grid grid-cols-12 p-2 cursor-pointer rounded-xl border-2 border-green hover:border-2 group hover:border-greenDark hover:shadow-lg'
                                                >
                                                    <div className='col-span-9 grid grid-cols-12 gap-3 items-center group-hover:text-greenDark'>
                                                        <div className='col-span-3 flex w-10 h-10 rounded-sm border-2 group-hover:border-none group-hover:text-white group-hover:bg-greenDark rotate-45 justify-center items-center'>
                                                            <p className='-rotate-45'>{item.nomor}</p>
                                                        </div>
                                                        <div className='col-span-9 text-sm'>
                                                            <p className='text-lg'>
                                                                {item.namaLatin}
                                                            </p>
                                                            <p className='font-semibold italic whitespace-nowrap overflow-hidden text-ellipsis'>
                                                                {item.arti}
                                                            </p>

                                                        </div>
                                                    </div>
                                                    <div className='col-span-3 text-center group-hover:text-greenDark whitespace-nowrap overflow-hidden'>
                                                        <p>
                                                            {item.nama}
                                                        </p>
                                                        <p >
                                                            {item.jumlahAyat} ayat
                                                        </p>
                                                    </div>
                                                </div>

                                            </motion.div>

                                        </Link>
                                    )
                                })
                            }
                        </div>

                    ) : (
                        <div className='text-center text-3xl text-greenDark py-32'>Pencarian tidak ditemukan</div>
                    )
                }
            </section>
        </main>
    )
}
export default Quran