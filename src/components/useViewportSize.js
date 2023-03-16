import React, { useEffect, useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useViewportSize() {
    useWindowEvent("resize", resizeHandler)
    const [height, setHeight] = useState()
    const [width, setWidth] = useState()


    function resizeHandler(event) {
        setHeight(event.target.innerHeight)
        setWidth(event.target.innerWidth)
    }



    return { height, width }
}

