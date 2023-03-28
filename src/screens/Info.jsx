import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CharactersUI from '../containers/CharactersUI'
import EpisodeUI from '../containers/EpisodeUI'
import LocationUI from '../containers/LocationUI'

function Info() {
    const navigate = useNavigate()
    const [itemInfo, setItemInfo] = useState("")

    const data = JSON.parse(localStorage.getItem('data'))
    const { category, id } = useParams()
    const currentItem = data.filter(item => item.id == id)[0]

    useEffect(() => {
        if (!currentItem) {
            navigate(`/${category}`)
        }
    }, [id])


    function item() {
        if (category === "locations") {
            return <LocationUI itemInfo={currentItem} />
        } else if (category === "episode") {
            return <EpisodeUI itemInfo={currentItem} />
        } else if (category === "characters") {
            return <CharactersUI itemInfo={currentItem} />
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        const result = item()
        setItemInfo(result)
    }, [category, id])

    return (
        <div className='flex flex-1 flex-col h-full bg-green-100'
        >
            {itemInfo}
        </div>
    )
}

export default Info