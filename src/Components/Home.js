import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
