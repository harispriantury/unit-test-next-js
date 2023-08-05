/* eslint-disable react/no-unescaped-entities */
"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { IDetailSurah } from '@/app/interfaces/surah'
import { IoMdPlayCircle, } from 'react-icons/io'
import { IoPauseCircle, IoReloadCircleSharp, IoInformationCircleSharp } from 'react-icons/io5'
import Image from 'next/image'
import bismillah2 from '@/public/bismillah2.png'


interface IAudioRefs {
    id: number | null
    audio: any | null
}

const Detail = ({ }) => {
    const { id } = useParams()
    const [detail, setDetail] = useState<IDetailSurah | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRefs = useRef<IAudioRefs>({ id: null, audio: null })

    const getDetailSurah = async () => {
        try {
            const response = await fetch(`https://equran.id/api/v2/surat/${id}`)
            const result = await response.json();
            setDetail(result.data as IDetailSurah)
        } catch (error) {

        }
    }

    useEffect(() => {
        getDetailSurah()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePlay = (audio: string, id: number) => {
        const prevAudio: IAudioRefs = audioRefs.current;

        //jika musik sedang diputar
        if (isPlaying) {
            prevAudio.audio.pause();
            setIsPlaying(false);
            return

        }

        //jika musik tidak sedang diputar
        //jika tidak id tidak sama
        if (prevAudio.id !== id) {
            const newAudio = new Audio(audio)
            setIsPlaying(true)
            audioRefs.current = {
                id: id,
                audio: newAudio
            }
            newAudio.play();

            //jika selesai diputar
            newAudio.addEventListener("ended", () => {
                audioRefs.current = {
                    id: null,
                    audio: null
                }
                setIsPlaying(false)
            })

        } else {
            //jika data ada sedang dipause
            setIsPlaying(true)
            prevAudio.audio.play();
        }
    }

    const handleReload = (audio: string, id: number) => {
        if (audioRefs.current.audio) {
            audioRefs.current.audio.pause();
            setIsPlaying(false)
        }

        const newAudio = new Audio(audio);
        newAudio.play();
        audioRefs.current = {
            id,
            audio: newAudio
        }
        setTimeout(() => {
            setIsPlaying(true)
        }, 500);

        newAudio.addEventListener('ended', () => {
            audioRefs.current = {
                id: null,
                audio: null
            }
            setIsPlaying(false)
        })
    }


    return (
        <div className='w-full flex flex-col gap-5 text-center text-greenDark'>
            <div className='pt-5 flex flex-col items-center'>
                <div className='w-1/4'>
                    <Image src={bismillah2} alt={''} />
                </div>
                <h1 className='text-center text-7xl font-semibold'>
                    {detail?.namaLatin}
                </h1>
                <p className='text-2xl'>"{detail?.arti}"</p>
            </div>
            {
                detail?.ayat.map((item, index) => {
                    return (
                        <div key={index} className='text-4xl bg-white p-5 rounded-xl flex flex-col gap-5 relative'>
                            <div className='bg-green absolute right-5 rounded-full gap-1 p-1 flex text-white'>
                                <button
                                    onClick={() => handlePlay(item.audio["01"], item.nomorAyat)}
                                >
                                    {isPlaying && audioRefs.current.id === item.nomorAyat ? <IoPauseCircle /> : <IoMdPlayCircle />}
                                </button>
                                <button
                                    onClick={() => handleReload(item.audio["02"], item.nomorAyat)}>
                                    <IoReloadCircleSharp />
                                </button>
                                <button>
                                    <IoInformationCircleSharp />
                                </button>
                            </div>
                            {/* <button onClick={() => handleContinue()}>continue</button> */}
                            <p className='text-3xl font-semibold bg-green p-1 text-white rounded-lg border-b-2 border-greenDark'>
                                {item.nomorAyat}
                            </p>
                            <p>
                                {item.teksArab}

                            </p>
                            <p className='text-xl'>
                                {item.teksLatin}

                            </p>
                            <p className='text-2xl'>
                                {item.teksIndonesia}

                            </p>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Detail