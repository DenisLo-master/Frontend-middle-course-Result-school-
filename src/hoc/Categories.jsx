import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import NavList from '../components/NavList'
import TopBar from './TopBar'

function Categories() {
    const location = useLocation()
    const categoryList = ["characters", "episode", "locations"]
    location.state = { countCategory: categoryList.length }

    const activeStyle = { active: 'text-orange-500', disActive: 'text-black' }

    return (
        <>
            <div className='flex pt-10'>
                <Outlet />
                <ul className='fixed text-3xl pl-4 pr-4 pt-3'>
                    <NavList listItems={categoryList} {...activeStyle} />
                </ul>
            </div>
        </>
    )
}

export default Categories