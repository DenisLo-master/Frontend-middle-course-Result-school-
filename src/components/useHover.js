import { useEffect, useRef, useState } from "react"

export function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null);

    function handleMouseEnter(status) {
        setHovered(status)
    };


    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('mouseenter', () => handleMouseEnter(true))
            ref.current.addEventListener('mouseleave', () => handleMouseEnter(false));
        }
        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mouseenter', () => handleMouseEnter(true))
                ref.current.removeEventListener('mouseleave', () => handleMouseEnter(false));
            }
        }
    }, [])


    return { hovered, ref }
}
