import React from 'react'

interface CustomButtonProps {
    text: string
    style: string
}

export const CustomButton = ({ text, style }: CustomButtonProps) => {
    return (
        <button className={`px-4 py-3 ${style} shadow-lg`}>
            {text}
        </button >
    )
}
