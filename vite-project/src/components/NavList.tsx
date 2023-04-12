import React, { FC, useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { CharacterData, EpisodesData, LocationData } from '../data'
import { Box, List, ListItemButton, ListItemText } from '@mui/material'

interface ActiveStyle {
    active: string
    disActive: string
}

type Item = (CharacterData | LocationData | EpisodesData)

interface NavListData {
    listItems: Item[] | string[]
    keyName?: keyof Item
    category?: string
}


const NavList: FC<NavListData> = ({ listItems, keyName = null, category }) => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const queryParams = useParams()
    const location = useLocation()
    const searchSort = searchParams.get("sort")
    const curSort = searchSort === null ? "ASC" : searchSort

    function getProps<T extends Item | string>(item: T, keyName: keyof Item | null) {
        const id = keyName && typeof item !== 'string' ? item.id : item
        const name = keyName &&
            typeof item !== "string" ? item[keyName] :
            typeof item === "string" && item
        return { id, name }
    }

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        !queryParams.id && setSelectedIndex(null)
    }, [queryParams.id])

    const navList = listItems.map((item, index) => {
        const { id, name } = getProps(item, keyName)
        const linkTo = category ? `/${category}/${id}` : `/${name}`
        return (
            <ListItemButton
                key={"li" + category + index}
                selected={selectedIndex === index}
                onClick={(event) => {
                    handleListItemClick(event, index)
                    console.log("---", id, queryParams.category)
                    navigate(`${linkTo}?sort=${curSort}`, { state: { from: location, } })
                }}
            >
                <ListItemText
                    primary={
                        <span
                            className={
                                `block whitespace-nowrap overflow-clip pr-4
                            ${(typeof id !== "string") ?
                                    selectedIndex === index && 'text-black text-lg text-md' :
                                    id == queryParams.category ? 'text-black text-3xl' : 'text-gray text-2xl'}`
                            }
                        >
                            {name}
                        </span>
                    } />
            </ListItemButton>
        )
    })


    return (
        <Box key={'box' + category} sx={{ width: '100%', color: "gray" }}>
            <List key={category} component="nav" aria-label={category ? category : "categoryList"}>
                {navList}
            </List>
        </Box>
    )
}

export default NavList