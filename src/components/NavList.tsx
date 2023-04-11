import React, { FC } from 'react'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'
import { CharacterData, EpisodesData, LocationData } from '../data'
import { Box, List, ListItemButton, ListItemText } from '@mui/material'

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

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };



    const navList = listItems.map((item, index) => {
        const { id, name } = getProps(item, keyName)
        const linkTo = category ? `/${category}/${id}` : `/${name}`
        return (
            <li key={"li" + index} className=''>
                <NavLink
                    key={"NavLink" + index}
                    to={{ pathname: linkTo, search: `?sort=${curSort}` }}
                    state={{ from: location }}
                >
                    <ListItemButton
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                    >
                        <ListItemText
                            primary={
                                <span className={
                                    `${selectedIndex === index && 'text-orange-400'}
                                    ${category ? 'text-md' : 'text-2xl'}
                                     block whitespace-nowrap overflow-clip pr-4 `
                                }
                                >
                                    {name}
                                </span>
                            } />
                    </ListItemButton>

                </NavLink>
            </li >
        )
    })



    return (
        <Box sx={{ width: '100%', color: "gray" }}>
            <List component="nav" aria-label="main mailbox folders">
                {navList}
            </List>
        </Box>
    )
}

export default NavList