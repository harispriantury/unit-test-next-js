import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='absolute right-0 w-full bg-greenDark text-center text-white p-5 flex flex-col items-center'>
            <div className='flex flex-col items-start text-base'>
                <h1 className='font-semibold'>API</h1>
                <ul className='flex flex-col items-start text-sm'>
                    <Link href={'https://equran.id/apidev'} target='_blank' >EQuran.id</Link>
                    <Link href={'https://api.myquran.com/'} target='_black' >MyQuran.com</Link>
                </ul>
            </div>
            <hr className='bg-white' />
            <br />
            <h1 className='underline'>Copyright © 2023. Made by Haris Priantury from Indonesia with ❤️</h1>
        </footer>
    )
}

export default Footer