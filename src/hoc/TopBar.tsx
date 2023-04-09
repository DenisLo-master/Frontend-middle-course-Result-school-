import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Popup } from '../components/UI/Popup'
import { SignIn, SignInInputs } from '../containers/SignIn'
import { SignUp, SignUpInputs } from '../containers/SignUp'
import { useAuth } from '../context/AuthProvider'


export interface InputStyle {
    [key: string]: string
}
export function TopBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const [signInShow, setSignInShow] = useState(false)
    const [signUpShow, setSignUpShow] = useState(false)
    const { authState, signIn, signUp, signOut } = useAuth()

    const search: string = location.state?.search
    const from = location.state?.from ? `${location.state.from}${search}` : "/"

    function signInHandler(state: SignInInputs) {
        console.log("signIn", state)
        signIn(state, () => {
            setSignInShow(false)
            navigate(from, { replace: true, state: { search } })
        })
    }

    function signUpHandler(state: SignUpInputs): void {
        signUp(state, () => {
            setSignUpShow(false)
            navigate(from, { replace: true, state: { search } })
        })
    }

    function logOut() {
        signOut(() => {
            navigate("/")
        })
    }

    const inputStyle: InputStyle = {
        radius: "md",
        size: "md",
    }

    return (
        <>
            <div className='fixed flex flex-row w-full z-10' >
                {signInShow &&
                    <Popup outsideClick={() => setSignInShow(false)}>
                        <SignIn onSubmit={signInHandler} inputStyle={inputStyle} />
                    </Popup>}
                {signUpShow &&
                    <Popup outsideClick={() => setSignUpShow(false)}>
                        <SignUp onSubmit={signUpHandler} inputStyle={inputStyle} />
                    </Popup>
                }
                <div className='relative flex w-full flex-row items-center justify-between bg-red-100 shadow-lg py-2 px-10' >
                    <span className='text-2xl'>Вселенная Рик и Морти</span>
                    <div className='flex flex-row'>
                        {authState.email ?
                            <button
                                className='m-1 bg-sky-500 text-white p-1 rounded-md px-2'
                                onClick={logOut}
                            >LogOut
                            </button> :
                            <div>
                                <button
                                    className='m-1 bg-white text-sky-500 p-1 rounded-md border-2 border-sky-500'
                                    onClick={() => setSignUpShow(true)}
                                >SignUp
                                </button>
                                <button
                                    className='m-1 bg-sky-500 text-white p-1 rounded-md px-2'
                                    onClick={() => setSignInShow(true)}
                                >SignIn
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </>

    )
}
