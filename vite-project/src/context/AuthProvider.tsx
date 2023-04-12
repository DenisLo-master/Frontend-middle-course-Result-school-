import React, { FC, PropsWithChildren, createContext, useContext, useState } from 'react'
import { SignUpInputs } from '../containers/SignUp'
import { SignInInputs } from '../containers/SignIn'


export function useAuth() {
    return useContext(AuthContext)

}

interface AuthState {
    email: string | null
    name: string | null
    nickname: string | null
    gender: string | null
}

interface AuthContextProps {
    authState: AuthState
    signIn: (newUser: SignInInputs, cb: () => void) => void
    signUp: (newUser: SignUpInputs, cb: () => void) => void
    signOut: (cb: () => void) => void
}

const emptyAuth = {
    email: null,
    name: null,
    nickname: null,
    gender: null
}

const initContextProps = {
    authState: emptyAuth,
    signIn: () => { },
    signUp: () => { },
    signOut: () => { },
}

const AuthContext = createContext<AuthContextProps>(initContextProps)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const localUser = localStorage.getItem('auth')
    const initState = localUser ? JSON.parse(localUser) : emptyAuth
    const [authState, setAuth] = useState<AuthState>(initState)

    const signIn = (newUser: SignInInputs, callback: () => void) => {

        const newUserData: AuthState = {
            email: newUser.email,
            gender: null,
            nickname: null,
            name: null,
        }
        setAuth((prev) => (
            {
                ...prev,
                ...newUserData
            }
        ))
        localStorage.setItem('auth', JSON.stringify(newUser))
        callback()
    }

    const signUp = (newUser: SignUpInputs, callback: () => void) => {
        const newUserData: AuthState = {
            email: newUser.email,
            gender: newUser.gender,
            nickname: newUser.nickname,
            name: newUser.name,
        }
        setAuth((prev) => (
            {
                ...prev,
                ...newUserData
            }
        ))
        localStorage.setItem('auth', JSON.stringify(newUserData))
        callback()
    }

    const signOut = (callback: () => void) => {
        setAuth(emptyAuth)
        localStorage.removeItem('auth')
        callback()
    }

    const value = {
        authState,
        signIn,
        signUp,
        signOut
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider >
    )
}
