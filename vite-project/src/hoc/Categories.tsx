import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavList from '../components/NavList'

export const CATEGORY_LIST = ["characters", "episodes", "locations"]

function Categories() {
    const location = useLocation()
    location.state = { countCategory: CATEGORY_LIST.length }


    return (
        <div className='relative flex items-stretch h-screen w-full'>
            <Outlet />
            <div className='fixed w-1/4 top-0 text-3xl pt-14'>
                <NavList listItems={CATEGORY_LIST} setPageNumber={() => { }} />
            </div>
        </div>
    )
}

export default Categories