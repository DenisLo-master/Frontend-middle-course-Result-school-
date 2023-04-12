import React, { useEffect, useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
    useWindowEvent("scroll", scrollHandler)
    const [scroll, setScroll] = useState({ x: 0, y: 0 })


    function scrollHandler(event) {
        const y = window.pageYOffset;
        const x = window.pageXOffset;
        setScroll({ x, y })
    }

    function scrollTo(params) {
        window.scrollTo(params.y, params.x)
    }

    return [scroll, scrollTo]
}