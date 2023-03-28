import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'
import Categories from './hoc/Categories'
import Page from './hoc/Page'
import PrivateRoute from './hoc/PrivateRoute'
import TopBar from './hoc/TopBar'
import Home from './screens/Home'
import Info from './screens/Info'

function AppLesson6() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<TopBar />}>
                        <Route path="/auth" element={<Home />} />
                        <Route element={<PrivateRoute><Categories /></PrivateRoute>}>
                            <Route element={<Page />} >
                                <Route index element={<Home />} />
                                <Route path=":category" element={<Info />} />
                                <Route path=":category/:id" element={<Info />} />
                            </Route>
                        </Route>
                        {/* <Route path="/" element={<Home />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default AppLesson6