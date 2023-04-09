import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams, useSearchParams, } from 'react-router-dom';
import NavList from '../components/NavList';
import SortBtn from '../components/SortBtn';
import { CharacterData, EpisodesData, LocationData, charactersData, episodeData, locationData } from '../data/index';


export function Page() {
    const { category } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [inputFilter, setInputFilter] = useState("")

    const marginTop = location.state.countCategory * 60
    const [navList, setNavList] = useState<JSX.Element | null>(null)
    const activeStyle = { active: 'text-orange-700', disActive: 'text-black' }

    const getSortDirection = (sortParam: string) => {
        if (sortParam === "ASC") {
            return 1
        } else if (sortParam === "DESC") {
            return -1
        }
        return 1
    }

    const getDataList = (category: string, sort: string) => {
        let data = null
        if (category === "locations") {
            data = locationData()
        } else if (category === "episodes") {
            data = episodeData()
        } else if (category === "characters") {
            data = charactersData()
        } else {
            navigate("/")
            return
        }

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
        localStorage.setItem('data', JSON.stringify(data));
        const navList = (
            <NavList
                listItems={filteredData}
                keyName="name"
                category={category}
                activeStyle={activeStyle}
            />)
        setNavList(navList)
    }



    useEffect(() => {
        let sort = searchParams.get("sort")
        sort = sort ? sort : "ASC"
        if (sort === "ASC" || sort === "DESC") {
            category && getDataList(category, sort)
        }
    }, [searchParams, inputFilter, category])

    return (
        <>
            <div className='relative flex flex-col bg-sky-100 h-screen w-1/4'>
                <div
                    style={{ marginTop }}
                    className='flex grow relative border-t-4 border-sky-500'
                >
                    {category &&
                        <div className='flex grow flex-col items-start pl-4 pt-4'>
                            <div className='flex items-center gap-3'>
                                <SortBtn name="sort" />
                                <input value={inputFilter} placeholder=" search" type="text" onChange={(e) => setInputFilter(e.target.value)} />
                            </div>
                            <div className='relative overflow-y-scroll w-full'>
                                {navList}
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}
