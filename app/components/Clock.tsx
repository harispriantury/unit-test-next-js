"use client"
import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState<string>('');

    setTimeout(() => {
        const newTime = new Date();
        setTime(newTime.toLocaleTimeString())
    }, 1000)
    return (
        <div>{time}</div>
    )
}

export default Clock