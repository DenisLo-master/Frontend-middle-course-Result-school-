import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import Categories from './hoc/Categories'
import { CategoryDetail } from './hoc/CategoryDetail'
import { PrivateRoute } from './hoc/PrivateRoute'
import { TopBar } from './hoc/TopBar'
import { Home } from './screens/Home'
import { Info } from './screens/Info'

function App() {



  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<TopBar />}>
            <Route path="/auth" element={<Home />} />
            <Route element={<PrivateRoute><Categories /></PrivateRoute>}>
              <Route element={<CategoryDetail />} >
                <Route index element={<Home />} />
                <Route path=":category" element={<Info />} />
                <Route path=":category/:id" element={<Info />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  )
}

export default App