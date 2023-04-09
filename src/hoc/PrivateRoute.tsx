import React, { FC, ReactElement, } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

type Props = {
    children: JSX.Element
};

export const PrivateRoute: FC<Props> = ({ children }) => {
    const { authState } = useAuth()
    const location = useLocation()


    if (!authState.email) {
        return <Navigate to="/auth" state={{ ...location, from: location.pathname, search: location.search }} replace />
    }
    return children
}
