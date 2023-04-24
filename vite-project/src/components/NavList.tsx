import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { CharacterData, EpisodesData, LocationData } from '../data'
import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import { useFetch } from './useFetch'
import { CATEGORY_LIST } from '../hoc/Categories'

interface ActiveStyle {
    active: string
    disActive: string
}

type Item = (CharacterData | LocationData | EpisodesData)

interface NavListData {
    listItems: Item[] | string[]
    keyName?: keyof Item
    category?: string
    setPageNumber: () => void
}


const NavList: FC<NavListData> = ({ listItems, keyName = null, category, setPageNumber }) => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const queryParams = useParams()
    const location = useLocation()
    const searchSort = searchParams.get("sort")
    const curSort = searchSort === null ? "ASC" : searchSort

    const {
        isLoading,
        hasMore,
        fetch
    } = useFetch();


    const observer = useRef<IntersectionObserver | null>()

    const lastNodeRef = useCallback((node: HTMLDivElement) => {

        if (isLoading) return
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver((entries) => {

            if (entries[0].isIntersecting && hasMore) {
                setPageNumber()
            }
        })
        if (node) {

            observer.current.observe(node)
        }
    }, [isLoading, hasMore])

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
        const lastNode = listItems.length === index + 3 &&
            typeof id === "number" ?
            lastNodeRef : null

        return (
            <ListItemButton
                key={"li" + category + index}
                selected={selectedIndex === index}
                onClick={(event) => {
                    handleListItemClick(event, index)
                    navigate(`${linkTo}?sort=${curSort}`, { state: { from: location, } })
                }}
            >
                <ListItemText
                    primary={
                        <div
                            ref={lastNode}
                            className={
                                `block whitespace-nowrap overflow-clip pr-4
                            ${(typeof id !== "string") ?
                                    selectedIndex === index && 'text-black text-lg text-md' :
                                    id == queryParams.category ? 'text-black text-3xl' : 'text-gray text-2xl'}`
                            }
                        >
                            {name}
                        </div>
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