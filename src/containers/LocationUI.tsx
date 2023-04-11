import React, { ComponentType, FC } from 'react'
import { LocationData } from '../data'

interface ItemsInfo {
    itemInfo: LocationData
}

export const LocationUI: ComponentType<ItemsInfo> = ({ itemInfo }): JSX.Element => {
    return (
        <div className='flex grow h-screen w-full  justify-center items-center'>
            {itemInfo ?
                <div className='flex border-4 border-sky-500 mr-5'>
                    <div className='flex flex-col text-2xl mr-10 p-4'>
                        <span>name: {itemInfo.name}</span>
                        <span>type: {itemInfo.type}</span>
                        <span>dimension: {itemInfo.dimension}</span>
                        <span>created: {itemInfo.created}</span>
                    </div>
                </div> :
                <span className='p-20 text-2xl '>
                    Локации в популярной вселенной "Рика и Морти" - это разнообразные миры, планеты, галактики и измерения, которые Рик и его внук Морти посещают в своих приключениях. Каждая локация имеет свои уникальные особенности, существа, технологии и препятствия, которые Рик и Морти должны преодолеть. Некоторые локации, такие как Земля в альтернативных вселенных, являются основными местами действия сериала, в то время как другие локации, такие как планета с чудовищами или центр управления вселенной, появляются только в отдельных эпизодах. Локации в "Рике и Морти" часто отличаются высоким уровнем научной фантастики, черным юмором и неожиданными поворотами сюжета.
                </span>
            }
        </div>)
}
