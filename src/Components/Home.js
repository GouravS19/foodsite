import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
