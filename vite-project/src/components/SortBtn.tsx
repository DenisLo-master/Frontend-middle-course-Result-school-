import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import SortBtnUI from './UI/SortBtnUI';

interface SortBtnProps {
    name: string
}
export default function SortBtn({ name }: SortBtnProps) {
    const [sortState, setSortState] = useState<boolean>(true)
    const [searchParams, setSearchParams] = useSearchParams()

    function toggle() {
        setSortState((prev) => !prev)
    }

    function sortStateToSort(sortState: boolean) {
        if (sortState) {
            return "ASC"
        } else {
            return "DESC"
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
