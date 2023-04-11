import React, { Suspense, lazy, useEffect, useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CharacterData, EpisodesData, LocationData } from '../data'
import { SpinnerBars } from '../components/UI/SpinnerBars'
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const LocationUI = lazy(() => import('../containers/LocationUI')
    .then(module => ({ default: module.LocationUI })))
const EpisodeUI = lazy(() => import('../containers/EpisodeUI')
    .then(module => ({ default: module.EpisodeUI })))
const CharactersUI = lazy(() => import('../containers/CharactersUI')
    .then(module => ({ default: module.CharactersUI })))

export function Info() {
    const navigate = useNavigate()
    const [itemInfo, setItemInfo] = useState<JSX.Element>()
    const [isPending, startTransition] = useTransition()
    const { category, id } = useParams()

    const dataStorage = category && localStorage.getItem(category)
    const data: (LocationData | EpisodesData | CharacterData)[] = dataStorage && JSON.parse(dataStorage)
    const currentItem = data && data.filter(item => id && item.id === +id)[0]

    useEffect(() => {
        if (!currentItem) {
            navigate(`/${category}`)
        } else {
            startTransition(() => {
                item().then((res) => {
                    res && setItemInfo(res)
                })
            })
        }
    }, [id])

    async function item(): Promise<JSX.Element | void> {
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
        startTransition(() => {
            item().then((res) => {
                res && setItemInfo(res)
            })
        })
    }, [category])


    return (
        <div className='flex flex-1 flex-col h-screen w-full bg-green-100 justify-center  items-center'
        >
            {isPending &&
                <div className='absolute'>
                    <SpinnerBars />
                </div>}
            <Suspense>
                {itemInfo}
            </Suspense>

        </div>
    )
}
