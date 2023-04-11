import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CharactersUI from '../containers/CharactersUI'
import EpisodeUI from '../containers/EpisodeUI'
import LocationUI from '../containers/LocationUI'

function Info() {
    const navigate = useNavigate()
    const [itemInfo, setItemInfo] = useState("")
    const { category, id } = useParams()

    const dataStorage = category && localStorage.getItem(category)
    const data = dataStorage && JSON.parse(dataStorage)
    const currentItem = data && data.filter(item => item.id === +id)[0]



    function item() {
        if (category === "locations") {
            return <LocationUI key={currentItem && currentItem.id} itemInfo={currentItem} />
        } else if (category === "episode") {
            return <EpisodeUI key={currentItem && currentItem.id} itemInfo={currentItem} />
        } else if (category === "characters") {
            return <CharactersUI key={currentItem && currentItem.id} itemInfo={currentItem} />
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        if (!currentItem) {
            navigate(`/${category}`)
        } else {
            const result = item()
            result && setItemInfo(result)
        }
    }, [id])


    useEffect(() => {
        const result = item()
        result && setItemInfo(result)
    }, [category])

    return (
        <div className='flex flex-1 flex-col h-full bg-green-100'
        >
            {itemInfo}
        </div>
    )
}

export default Info