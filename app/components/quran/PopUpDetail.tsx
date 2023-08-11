import { IDataSurah, IDetailSurah } from '@/app/interfaces/surah'
import React, { FC } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'

interface IPopUp {
    handleClose: () => void
    detail: IDetailSurah | null
}


const PopUpDetail: FC<IPopUp> = ({ handleClose, detail }) => {
    const handleClick = () => {
        handleClose()
    }
    return (
        <div className=' w-screen h-screen fixed top-0 left-0 z-[52]'>
            <div className='absolute w-full h-full bg-black bg-opacity-50 p-20 max-md:p-10 z-[50]'>
                <div className='w-full h-full bg-white rounded-2xl opacity-100 p-20 max-md:p-2 relative z-50 overflow-scroll'>
                    <button className='absolute right-3 top-3 text-3xl' onClick={() => handleClick()}><IoMdCloseCircle /></button>
                    <h1 className='text-2xl'>{detail?.nama}</h1>
                    <h2 className='text-xl pb-10'>{detail?.namaLatin}</h2>
                    <div className='grid grid-cols-6 text-start'>
                        <p className='col-span-2'>Jumlah Ayat</p>
                        <p className='col-span-4'>: {detail?.jumlahAyat} Ayat</p>
                        <p className='col-span-2'>Tempat Turun</p>
                        <p className='col-span-4'>: {detail?.tempatTurun}</p>
                        <p className='col-span-2'>Deskripsi</p>
                        <p className='col-span-4'>: {String(detail?.deskripsi)}</p>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default PopUpDetail