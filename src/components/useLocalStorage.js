import React, { useEffect, useState } from 'react'

export function useLocalStorage(curToken = null) {
    const [token, setToken] = useState()

    function getItem() {
        const saveToken = localStorage.getItem('token')
        const curToken = saveToken ? saveToken : null
        setToken(curToken)
    }

    function setItem(newToken) {
        const curToken = localStorage.setItem('token', newToken);
        setToken(curToken)
    }

    function removeItem() {
        localStorage.removeItem('token');
        setToken(null)
    }

    useEffect(() => {
        if (curToken) {
            setItem(curToken)
        } else {
            getItem()
        }
    }, [curToken])

    return [token, { setItem, removeItem }]
}