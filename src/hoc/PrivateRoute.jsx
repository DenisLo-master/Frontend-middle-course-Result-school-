import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function PrivateRoute({ children }) {
    const { auth } = useAuth()
    const location = useLocation()


    if (!auth?.user) {
        return <Navigate to="/auth" state={{ ...location, from: location.pathname, search: location.search }} replace />
    }

    return children
}
