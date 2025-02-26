import React, { use, useState } from 'react'
import './App.css'
import Navbar from './components/Layout/Navbar'
import Home from './components/Home/Home'
import MovieDetails from './components/Home/MovieDetails'
import Favorites from './components/Favorites/fav'

import People from './components/People/People'
import { Route, Routes } from 'react-router'
import Footer from './components/Layout/Footer'
import { ThemeProvider } from './context/ThemContext'

export default function App() {
  return <>
  <ThemeProvider>
  <Navbar/>
  <Routes>
    <Route index element={<Home />} />
    <Route path='/details/:id' element={<MovieDetails />} />
    
    <Route path='/Fav' element={<Favorites />} />
   
    <Route path='/People' element={<People />} />
  </Routes>
  <Footer />
  </ThemeProvider>
  </>
}

