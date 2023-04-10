import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CharactersUI } from '../containers/CharactersUI'
import { EpisodeUI } from '../containers/EpisodeUI'
import { LocationUI } from '../containers/LocationUI'
import { CharacterData, EpisodesData, LocationData } from '../data'



export function Info() {
    const navigate = useNavigate()
    const [itemInfo, setItemInfo] = useState<JSX.Element>()
    const { category, id } = useParams()

    const dataStorage = category && localStorage.getItem(category)
    const data: (LocationData | EpisodesData | CharacterData)[] = dataStorage && JSON.parse(dataStorage)
    const currentItem = data && data.filter(item => id && item.id === +id)[0]

    useEffect(() => {
        if (!currentItem) {
            navigate(`/${category}`)
        } else {
            const result = item()
            result && setItemInfo(result)
        }
    }, [id])



    function item(): JSX.Element | void {
        if (category === "locations") {
            return <LocationUI key={currentItem && currentItem.id} itemInfo={currentItem as LocationData} />
        } else if (category === "episodes") {
            return <EpisodeUI key={currentItem && currentItem.id} itemInfo={currentItem as EpisodesData} />
        } else if (category === "characters") {
            return <CharactersUI key={currentItem && currentItem.id} itemInfo={currentItem as CharacterData} />
        } else {
            navigate('/')
            return
        }
    }

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
