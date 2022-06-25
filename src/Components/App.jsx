import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Profile from './Profile'
import Categories from './Categories'



export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/categories' element={<Categories/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/profile' element={<Profile/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}
