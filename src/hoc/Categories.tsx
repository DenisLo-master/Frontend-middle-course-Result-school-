import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavList from '../components/NavList'

function Categories() {
    const location = useLocation()
    const categoryList = ["characters", "episodes", "locations"]
    location.state = { countCategory: categoryList.length }

    const activeStyle = { active: 'text-orange-500', disActive: 'text-black' }

    return (
        <div className='flex items-stretch h-screen w-full'>
            <Outlet />
            <div className='fixed w-1/4 top-0 text-3xl pt-14'>
                <NavList listItems={categoryList} activeStyle={activeStyle} />
            </div>
        </div>
    )
}

export default Categories