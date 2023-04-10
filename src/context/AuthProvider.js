import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(() => { return { user: localStorage.getItem('user') } })

    const signIn = (newUser, callback) => {
        setAuth((prev) => ({
            ...prev,
            user: newUser
        }
        ))
        localStorage.setItem('user', newUser)
        callback()
    }

    const signUp = (newUser, callback) => {
        setAuth((prev) => ({
            ...prev,
            user: newUser
        }
        ))
        localStorage.setItem('user', newUser)
        callback()
    }

    const signOut = (callback) => {
        setAuth({ user: null })
        localStorage.removeItem('user')
        callback()
    }

    const value = { auth, signIn, signUp, signOut }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
