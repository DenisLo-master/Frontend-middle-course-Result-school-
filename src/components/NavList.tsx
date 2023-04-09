import React, { FC } from 'react'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'
import { CharacterData, EpisodesData, LocationData } from '../data'

interface ActiveStyle {
    active: string
    disActive: string
}

type Item = (CharacterData | LocationData | EpisodesData)

interface NavListData {
    listItems: Item[] | string[]
    activeStyle: ActiveStyle
    keyName?: keyof Item
    category?: string
}

interface ActiveStatus {
    isActive: boolean
}



const NavList: FC<NavListData> = ({ listItems, activeStyle, keyName = null, category }) => {
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const curSort = searchParams.get("sort")
    const activeClass = ({ isActive }: ActiveStatus) => isActive ? activeStyle.active : activeStyle.disActive

    function getProps<T extends Item | string>(item: T, keyName: keyof Item | null) {
        const id = keyName && typeof item !== 'string' ? item.id : item
        const name = keyName && typeof item !== "string" ? item[keyName] : typeof item === "string" && item
        return { id, name }
    }

    const navList = listItems.map((item, index) => {
        const { id, name } = getProps(item, keyName)
        const linkTo = category ? `/${category}/${id}` : `/${name}`
        return (
            <li key={"li" + index} className='my-4'>
                <NavLink
                    key={"NavLink" + index}
                    to={{ pathname: linkTo, search: `?sort=${curSort}` }}
                    state={{ from: location }}
                    className={activeClass}
                >
                    {name}
                </NavLink>
            </li >
        )
    })



    return (
        <ul >
            {navList}
        </ul>
    )
}

export default NavList