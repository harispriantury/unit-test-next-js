/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from 'react'
import Search from '../components/quran/search';
import Link from 'next/link';
import { IDataSurah } from '../interfaces/surah';


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
                        <div className=' grid grid-cols-3 gap-4 w-5/6 text-white'>
                            {
                                surah?.map((item) => {
                                    return (
                                        <Link key={item.nomor} href={`detail/${item.nomor}`} >
                                            <div

                                                className='bg-green flex justify-between p-4 cursor-pointer rounded-xl border-2 border-green hover:border-2 group hover:border-greenDark hover:shadow-lg'
                                            >
                                                <div className='flex gap-3 items-center group-hover:text-greenDark'>
                                                    <div className='flex w-10 h-10 rounded-sm border-2 group-hover:border-none group-hover:text-white group-hover:bg-greenDark rotate-45 justify-center items-center'>
                                                        <p className='-rotate-45'>{item.nomor}</p>
                                                    </div>
                                                    <div className='text-sm '>
                                                        <p className='text-xl'>
                                                            {item.namaLatin}
                                                        </p>
                                                        <p className='font-semibold italic'>
                                                            {item.arti}
                                                        </p>

                                                    </div>
                                                </div>
                                                <div className='text-center group-hover:text-greenDark '>
                                                    <p>
                                                        الفاتحة
                                                    </p>
                                                    <p >
                                                        {item.jumlahAyat} ayat
                                                    </p>
                                                </div>
                                            </div>

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