/* eslint-disable react/no-unescaped-entities */
"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { IAyat, IDetailSurah } from '@/app/interfaces/surah'
import { IoMdPlayCircle, } from 'react-icons/io'
import { IoPauseCircle, IoReloadCircleSharp, IoInformationCircleSharp } from 'react-icons/io5'
import Image, { StaticImageData } from 'next/image'
import bismillah2 from '@/public/bismillah2.png'
import PopUpDetail from '@/app/components/quran/PopUpDetail'
import qory1 from '@/public/1.jpg'
import qory2 from '@/public/2.jpeg'
import qory3 from '@/public/3.jpg'
import qory4 from '@/public/4.jpg'
import qory5 from '@/public/5.jpeg'

interface IQory {
    image: StaticImageData
    kode: string
}

const qory: IQory[] = [
    {
        image: qory1,
        kode: "01"
    },
    {
        image: qory2,
        kode: "02"
    },
    {
        image: qory3,
        kode: "03"
    },
    {
        image: qory4,
        kode: "04"
    },
    {
        image: qory5,
        kode: "05"
    }
]

interface IAudioRefs {
    id: number | null
    audio: any | null
}

const Detail = ({ }) => {
    const { id } = useParams()
    const [popUp, setPopUp] = useState<boolean>(false);
    const [detail, setDetail] = useState<IDetailSurah | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRefs = useRef<IAudioRefs>({ id: null, audio: null });
    const [activeQory, setActiveQory] = useState<string>('01')

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
        console.log(audio)
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
                    index === 1 && console.log(item.audio)
                    return (
                        <div key={index} className='text-4xl bg-white p-5 rounded-xl flex flex-col max-md:items-center gap-5 relative'>
                            <div id='speaker' className='flex items-center gap-1 absolute max-md:relative max-md:bg-green max-md:rounded-full left-5 max-md:left-0 p-1'>
                                {
                                    qory.map((item) => {
                                        return (
                                            <button
                                                onClick={() => setActiveQory(item.kode)}
                                                className={`bg-white w-10 h-10 rounded-full overflow-hidden border-2 ${activeQory == item.kode ? 'border-white brightness-100' : 'border-gray brightness-75'}`}
                                                key={item.kode}
                                            >
                                                <Image width={100} src={item.image} alt={item.kode} />
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            <div className='bg-green absolute max-md:relative max-md:right-0 right-5 rounded-full gap-1 p-1 flex text-white'>

                                <button
                                    onClick={() => handlePlay(item.audio[activeQory], item.nomorAyat)}
                                >
                                    {isPlaying && audioRefs.current.id === item.nomorAyat ? <IoPauseCircle /> : <IoMdPlayCircle />}
                                </button>
                                <button
                                    onClick={() => handleReload(item.audio[activeQory], item.nomorAyat)}>
                                    <IoReloadCircleSharp />
                                </button>
                                <button
                                    onClick={() => setPopUp(true)}
                                >
                                    <IoInformationCircleSharp />
                                </button>
                            </div>
                            {/* <button onClick={() => handleContinue()}>continue</button> */}
                            <p className='text-3xl font-semibold bg-green p-1 text-white rounded-lg border-b-2 border-greenDark'>
                                {item.nomorAyat}
                            </p>
                            <p className='max-md:text-2xl'>
                                {item.teksArab}

                            </p>
                            <p className='text-xl max-md:text-base'>
                                {item.teksLatin}

                            </p>
                            <p className='text-2xl max-md:text-lg'>
                                {item.teksIndonesia}

                            </p>
                        </div>
                    )
                })
            }
            <button onClick={() => console.log(detail)}>test</button>
            {
                popUp && (
                    <PopUpDetail
                        detail={detail}
                        handleClose={() => setPopUp(false)}
                    />
                )
            }

        </div >
    )
}

export default Detail