import React, { Suspense, lazy, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CharacterData, EpisodesData, LocationData } from '../data'
import { SkeletonUI } from '../components/UI/SkeletonUI'
import ErrorBoundary from '../hoc/ErrorBoundary'

const LocationUI = lazy(() => import('../containers/LocationUI')
    .then(module => ({ default: module.LocationUI })))
const EpisodeUI = lazy(() => import('../containers/EpisodeUI')
    .then(module => ({ default: module.EpisodeUI })))
const CharactersUI = lazy(() => import('../containers/CharactersUI')
    .then(module => ({ default: module.CharactersUI })))

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

            item().then((res) => {
                res && setItemInfo(res)
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

        item().then((res) => {
            res && setItemInfo(res)
        })
    }, [category])

    const skeleton = (<div className='absolute w-3/4 px-20'>
        <SkeletonUI countRows={8} />
    </div>)

    return (
        <div className='flex h-screen w-3/4 bg-green-100 justify-center items-start pt-14'
        >
            <ErrorBoundary>
                <div className='flex  h-full justify-center pt-48 flex-nowrap overflow-auto z-10'>
                    <Suspense fallback={skeleton}>
                        {itemInfo}
                    </Suspense>
                </div>
            </ErrorBoundary>
        </div>
    )
}
