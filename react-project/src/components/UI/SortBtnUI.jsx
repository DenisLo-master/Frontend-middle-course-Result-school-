import React from 'react'
import { SortAscendingLetters, SortDescendingLetters } from "tabler-icons-react"


export default function SortBtnUI({ name = "button", sort = "ASC", onClick }) {
    return (
        <button
            className='border-0 bg-transparent '
            onClick={onClick}>
            <div className='flex flex-row justify-center'>
                <span className='text-3xl text-sky-500'>{name} </span>
                <div className='mt-1 ml-2'>
                    {sort === "ASC" ?
                        <SortAscendingLetters
                            size={30}
                            strokeWidth={2}
                            color={'#0ea5e9'}
                        /> : <SortDescendingLetters
                            size={30}
                            strokeWidth={2}
                            color={'#0ea5e9'}
                        />}
                </div>
            </div>
        </button>
    )
}
