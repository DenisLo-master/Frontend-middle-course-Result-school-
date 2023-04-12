import React from 'react'
import { Skeleton } from '@mui/material'

type Variant = (
    "text" | "rectangular" | "rounded" | "circular"
)

interface SkeletonTextProps {
    variant?: Variant
    countRows?: number
    paddingTop?: number | string
    width?: number | string
    height?: number | string
}
export function SkeletonUI({ variant = "text", countRows = 1, paddingTop = '0', width = 'full', height = '2rem' }: SkeletonTextProps) {
    let rows = []
    for (let i: number = 1; i <= countRows; i++) {
        rows.push(
            <div key={"div" + i} style={{ paddingTop }} className='block'>
                <Skeleton
                    key={i}
                    variant={variant}
                    animation="wave"
                    width={width}
                    height={height}
                />
            </div>
        )
    }
    return (
        <>
            {rows}
        </>
    )
}
