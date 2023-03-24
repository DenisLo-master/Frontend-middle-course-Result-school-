import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './hoc/Categories'
import Page from './hoc/Page'
import Home from './screens/Home'
import Info from './screens/Info'

function AppLesson6() {
    return (
        <div className='flex flex-row'>
            <BrowserRouter>
                <Routes>
                    <Route element={<Categories />}>
                        <Route element={<Page />} >
                            <Route index element={<Home />} />
                            <Route path=":category" element={<Info />} />
                            <Route path=":category/:id" element={<Info />} />
                        </Route>
                    </Route>
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppLesson6