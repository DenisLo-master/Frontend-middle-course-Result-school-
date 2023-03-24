import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import SortBtnUI from './UI/SortBtnUI';


export default function SortBtn({ name }) {
    const [sortState, setSortState] = useState()
    const [searchParams, setSearchParams] = useSearchParams()

    function toggle() {
        setSortState((prev) => !prev)
    }

    function sortStateToSort(sortState) {
        if (sortState) {
            return "ASC"
        } else if (sortState === false) {
            return "DESC"
        } else {
            return null
        }
    }

    useEffect(() => {
        const curSort = searchParams.get("sort")
        const sort = sortStateToSort(sortState)
        curSort !== sort && sort && setSearchParams({ sort })
    }, [sortState])

    useEffect(() => {
        const curSort = searchParams.get("sort")
        curSort === "null" && setSortState(true)
    }, [searchParams])

    return (
        <SortBtnUI name={name} sort={sortStateToSort(sortState)} onClick={toggle} />
    )
}
