import React, { FC, FunctionComponentElement } from 'react'
import { CharacterData } from '../data'
interface ItemsInfo {
    itemInfo: CharacterData
}

export const CharactersUI: FC<ItemsInfo> = ({ itemInfo = null }): JSX.Element => {
    return (
        <div className='flex grow h-screen w-full  justify-center items-center'>
            {itemInfo ?
                <div className='flex border-4 border-sky-500 mr-5'>
                    <div className='flex flex-col text-2xl mr-10 p-4'>
                        <span>name: {itemInfo.name}</span>
                        <span>status: {itemInfo.status}</span>
                        <span>species: {itemInfo.species}</span>
                        <span>type: {itemInfo.type}</span>
                        <span>gender: {itemInfo.gender}</span>
                        <span>created: {itemInfo.created}</span>
                    </div>
                    <img
                        className='p-1 border-l-4 border-sky-500 object-contain'
                        alt={itemInfo.name}
                        src={itemInfo.image}
                    />
                </div> :
                <span className='p-20 text-2xl '>
                    Персонажи из популярной вселенной "Рика и Морти" включают в себя различных инопланетных существ, альтернативных версий персонажей, родственников и друзей главных героев. Среди них есть самый умный человек в мире - Рик Санчез, его внучка Саммер и внебрачный сын Морти Смит. Также есть другие члены семьи Смитов, включая Бет Смит, мать Морти, и ее мужа - Джерри. Кроме того, есть множество других персонажей, с которыми Рик и Морти взаимодействуют в своих приключениях, включая агента-инопланетянина по имени Бирдперсон, злодея - Джессику, мутировавшую крысу - Сноуболла и многих других. Каждый персонаж имеет свою уникальную личность, историю и мотивацию, которые часто связаны с крутыми научно-фантастическими сюжетами, где они участвуют.
                </span>
            }
        </div>)
}