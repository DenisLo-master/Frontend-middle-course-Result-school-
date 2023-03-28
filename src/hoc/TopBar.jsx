import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Popup from '../components/UI/Popup'
import Signin from '../containers/Signin'
import Signup from '../containers/Signup'
import { useAuth } from '../context/AuthProvider'

export default function TopBar() {
    const navigate = useNavigate()
    const location = useLocation()

    const [signinShow, setSigninShow] = useState(false)
    const [signupShow, setSignupShow] = useState(false)
    const { auth, signIn, signUp, signOut } = useAuth()

    const search = location.state?.search
    const from = `${location.state?.from}${search}` || "/"

    function signinHandler(state) {
        signIn(state.email, () => {
            setSigninShow(false)
            navigate(from, { replace: true, search: search })
        })
    }

    function signupHandler(state) {
        signUp(state.email, () => {
            signupShow(false)
            navigate(from, { replace: true, search })
        })
    }

    function logOut() {
        signOut(() => {
            navigate("/")
        })
    }

    const inputStyle = {
        radius: "md",
        size: "md",
    }

    return (
        <>
            <div className='fixed flex flex-row w-full z-10' >
                {signinShow &&
                    <Popup outsideClick={() => setSigninShow(false)}>
                        <Signin onSubmit={signinHandler} inputStyle={inputStyle} />
                    </Popup>}
                {signupShow &&
                    <Popup outsideClick={() => setSignupShow(false)}>
                        <Signup onSubmit={signupHandler} inputStyle={inputStyle} />
                    </Popup>
                }
                <div className='relative flex w-full flex-row items-center justify-between bg-red-100 shadow-lg py-2 px-10' >
                    <span className='text-2xl'>Вселенная Рик и Морти</span>
                    <div className='flex flex-row'>
                        {auth?.user ?
                            <button
                                className='m-1 bg-sky-500 text-white p-1 rounded-md px-2'
                                onClick={logOut}
                            >LogOut
                            </button> :
                            <div>
                                <button
                                    className='m-1 bg-white text-sky-500 p-1 rounded-md border-2 border-sky-500'
                                    onClick={() => setSignupShow(true)}
                                >SignUp
                                </button>
                                <button
                                    className='m-1 bg-sky-500 text-white p-1 rounded-md px-2'
                                    onClick={() => setSigninShow(true)}
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
