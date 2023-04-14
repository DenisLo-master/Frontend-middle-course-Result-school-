import React, { FC, FunctionComponentElement, useState } from 'react'
import { CharacterData } from '../data'
import { SkeletonUI } from '../components/UI/SkeletonUI'
interface ItemsInfo {
    itemInfo: CharacterData
}

export const CharactersUI: FC<ItemsInfo> = ({ itemInfo = null }): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);

    return (itemInfo ?
        <>
            <div className='block  w-full  z-20'>
                <div className='flex h-auto border-4 rounded-r-3xl border-sky-500 mr-5'>
                    <div className='flex flex-col text-2xl mr-10 p-4'>
                        <span>name: {itemInfo.name}</span>
                        <span>status: {itemInfo.status}</span>
                        <span>species: {itemInfo.species}</span>
                        <span>type: {itemInfo.type}</span>
                        <span>gender: {itemInfo.gender}</span>
                        <span>created: {itemInfo.created}</span>
                    </div>
                    <div className='flex p-1 relative border-l-4  border-sky-500 justify-center px-8 items-center'>
                        <img
                            className='fixed object-contain  rounded-r-3xl '
                            alt={itemInfo.name}
                            src={itemInfo.image}
                            width={250}
                            height={250}
                            onLoad={() => setIsLoading(false)}
                        />

                        <div className={isLoading ? 'opacity-100' : 'opacity-0'}>
                            <SkeletonUI variant='rounded' width={250} height={250} />
                        </div>

                    </div>
                </div>
            </div>
            {!isLoading && <img
                className='fixed w-3/4 p-8 h-full object-cover blur-lg z-1 opacity-30 transition-opacity ease-in-out delay-1000 duration-1000'
                alt={itemInfo.name}
                src={itemInfo.image}
            />}
        </> :
        <span className='flex flex-col px-20  text-2xl '>
            Персонажи из популярной вселенной "Рика и Морти" включают в себя различных инопланетных существ, альтернативных версий персонажей, родственников и друзей главных героев. Среди них есть самый умный человек в мире - Рик Санчез, его внучка Саммер и внебрачный сын Морти Смит. Также есть другие члены семьи Смитов, включая Бет Смит, мать Морти, и ее мужа - Джерри. Кроме того, есть множество других персонажей, с которыми Рик и Морти взаимодействуют в своих приключениях, включая агента-инопланетянина по имени Бирдперсон, злодея - Джессику, мутировавшую крысу - Сноуболла и многих других. Каждый персонаж имеет свою уникальную личность, историю и мотивацию, которые часто связаны с крутыми научно-фантастическими сюжетами, где они участвуют.
        </span>
    )
}