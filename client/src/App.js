import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './context/userContext'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import Intro from './pages/Intro'


const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Intro />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App