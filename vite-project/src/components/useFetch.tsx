import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DataResponse } from '../data'

interface Params {
    _limit?: number
    category?: string
    page?: number
}


const BASE_URL = 'https://rickandmortyapi.com/api/'


function getUrl(category: string) {
    let url = ""
    if (category === "locations") {
        url = BASE_URL + 'location'
    } else if (category === "episodes") {
        url = BASE_URL + 'episode'
    } else if (category === "characters") {
        url = BASE_URL + 'character'
    }
    return url
}

export function useFetch(category?: string, page?: number) {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [data, setData] = useState<DataResponse | []>([])
    const [error, setError] = useState(null)

    function checkPageData(page: number, dataResponse: DataResponse): void {
        if (page === 1) {
            setData(dataResponse)
        } else {
            setData(prevState => [...prevState, ...dataResponse])
        }
    }


    async function fetch(params: Params): Promise<DataResponse> {
        return new Promise<DataResponse>((resolve, reject) => {
            const queryPage = params.page ? params.page : page
            if (!queryPage) {
                setLoading(false)
                resolve([])
                return
            }

            let cancel: () => void
            const curCategory = params.category ? params.category : category
            const url = curCategory && getUrl(curCategory)

            if (queryPage <= totalPages) {
                url && axios({
                    method: "GET",
                    url: url,
                    params: { page: queryPage },
                    cancelToken: new axios.CancelToken((c) => cancel = c)
                }).then(response => {
                    const limit = params ? params?._limit : 20
                    const dataResponse: DataResponse = response.data.results.slice(0, limit)
                    setTotalPages(response.data.info.pages)
                    checkPageData(queryPage, dataResponse)
                    setHasMore(dataResponse.length > 0)
                    setLoading(false)
                    if (dataResponse) {
                        resolve([...data, ...dataResponse])
                    } else {
                        resolve(data)
                    }
                }).catch(error => {
                    if (axios.isCancel(error)) {
                        setLoading(false)
                        resolve(data)
                    }
                    setError(error)
                    setLoading(false)
                    reject()
                })
            } else {
                resolve(data)
            }

            return () => cancel()
        })
    }
    useEffect(() => {
        setLoading(true)
        fetch({})
    }, [category])


    return {
        data,
        isLoading,
        error,
        hasMore,
        fetch
    }
}
