import React, { Suspense, useEffect, useState, useTransition } from 'react'
import { Outlet, useLocation, useNavigate, useParams, useSearchParams, } from 'react-router-dom';
import NavList from '../components/NavList';
import SortBtn from '../components/SortBtn';
import { CharacterData, EpisodesData, LocationData, charactersData, episodeData, locationData } from '../data/index';
import { TextField } from '@mui/material';
import { SkeletonUI } from '../components/UI/SkeletonUI';


export function CategoryDetail() {
    const [isPending, startTransition] = useTransition()

    const { category } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [inputFilter, setInputFilter] = useState("")

    const marginTop = location.state.countCategory * 60
    const [navList, setNavList] = useState<JSX.Element | null>(null)

    const getSortDirection = (sortParam: string) => {
        if (sortParam === "ASC") {
            return 1
        } else if (sortParam === "DESC") {
            return -1
        }
        return 1
    }

    const getDataList = (category: string,) => {
        let data = null
        if (category === "locations") {
            data = locationData()
        } else if (category === "episodes") {
            data = episodeData()
        } else if (category === "characters") {
            data = charactersData()
        } else {
            navigate("/")
        }
        data && localStorage.setItem(category, JSON.stringify(data));
        return data
    }

    const getNavList = (category: string, sort: string) => {
        const data = getDataList(category)
        if (data === null) return
        const sortDirection = getSortDirection(sort);


        function getFilteredData<T extends (CharacterData | EpisodesData | LocationData)[]>(data: T) {
            return data.filter((item) => item.name.includes(inputFilter))
        }

        const filteredData = getFilteredData(data)
        filteredData.sort(function (a, b) {
            if (a.name > b.name) {
                return 1 * sortDirection
            }
            if (a.name < b.name) {
                return -1 * sortDirection;
            }
            return 0;
        })

        const navList = (
            <NavList
                listItems={filteredData}
                keyName="name"
                category={category}
            />)
        setNavList(navList)
    }



    useEffect(() => {
        const sortParam = searchParams.get("sort")
        const sort = sortParam ? sortParam : "ASC"
        if (sort === "ASC" || sort === "DESC") {
            category && startTransition(() => {
                getNavList(category, sort)
            })
        }
    }, [searchParams, inputFilter, category])

    return (
        <>
            <div className='relative h-screen flex items-stretch pt-14  bg-sky-100 h-full w-1/4 border-box z-100'>
                <div
                    style={{ marginTop }}
                    className=' relative border-box  border-t-4 border-sky-500 w-full'
                >
                    {category &&
                        <div className='flex flex-initial relative flex-col h-full relative items-start  pt-4 '>
                            <div className='flex items-center justify-between w-full pl-4 pr-4'>
                                <SortBtn name="sort" />

                                <TextField
                                    id="filled-basic"
                                    label="search"
                                    variant="filled"
                                    color='info'
                                    fullWidth={true}
                                    value={inputFilter} placeholder=" search" type="text"
                                    onChange={(e) => setInputFilter(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-nowrap overflow-auto relative h-full w-full pt-4'>
                                {isPending &&
                                    <div className=' absolute w-full px-4'>
                                        <SkeletonUI countRows={10} paddingTop='1rem' />
                                    </div>}
                                <Suspense>
                                    {navList}
                                </Suspense>
                            </div>

                        </div>
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}
