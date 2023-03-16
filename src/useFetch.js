import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export function useFetch(url) {
    const [isLoading, setLoading] = useState(null)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    async function refetch(args = { params: { _limit: 10 } }) {
        await axios.get(url).then(response => {
            const limit = args ? args?.params?._limit : 10
            const result = response.data.slice(0, limit)
            setData(result)
            setLoading(false)
        }).catch(error => {
            setError(error)
            setLoading(false)
        })
    }
    useEffect(() => {
        setLoading(true)
        refetch({ params: { _limit: 10 } })
    }, [url])

    return {
        data,
        isLoading,
        error,
        refetch
    }
}
