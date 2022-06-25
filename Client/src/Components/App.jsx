import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Profile from './Profile'
import Categories from './Categories'
import Question from './Question'
import Login from './Login'
import Signup from './Signup'


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/categories' element={<Categories/>}></Route>
                    <Route path='/profile' element={<Profile/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/signup' element={<Signup/>}></Route>
                    <Route path='/Fashion' element={<Question category="Fashion"/>}></Route>
                    <Route path='/Science' element={<Question category="Science"/>}></Route>
                    <Route path='/Culture&Trends' element={<Question category="Culture&Trends"/>}></Route>
                    <Route path='/Career' element={<Question category="Career"/>}></Route>
                    <Route path='/Politics' element={<Question category="Politics"/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}
