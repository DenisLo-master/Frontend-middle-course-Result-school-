import React from 'react'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'

function NavList({ listItems, active, disActive, keyName = null, category }) {
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const curSort = searchParams.get("sort")
    const activeClass = ({ isActive }) => isActive ? active : disActive
    const navList = listItems.map((item, index) => {
        const id = keyName ? item.id : item
        const name = keyName ? item[keyName] : item
        const linkTo = category ? `/${category}/${id}` : `/${name}`
        return (
            <li key={"li" + index} className='my-4'>
                <NavLink
                    key={"NavLink" + index}
                    to={{ pathname: linkTo, search: `?sort=${curSort}`, state: { from: location } }}
                    className={activeClass}
                >
                    {name}
                </NavLink>
            </li>
        )
    })
    return (
        <ul >
            {navList}
        </ul>
    )

}

export default NavList