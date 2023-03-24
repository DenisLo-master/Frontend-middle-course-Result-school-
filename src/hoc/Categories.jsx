import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import NavList from '../components/NavList'

function Categories() {
    const location = useLocation()
    const categoryList = ["characters", "episode", "locations"]
    location.state = { countCategory: categoryList.length }

    const activeStyle = { active: 'text-orange-500', disActive: 'text-black' }

    return (
        <>
            <Outlet />
            <ul className='fixed text-3xl pl-4 pr-4 '>
                <NavList listItems={categoryList} {...activeStyle} />
            </ul>
        </>
    )
}

export default Categories