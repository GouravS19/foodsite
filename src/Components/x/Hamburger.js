import React from 'react'

export default function Hamburger() {
    return (
        <div className='sm:hidden'>
            <img src={require("../utils/images/hamburger.png")} alt='logo' className='h-[1.4rem] inline'/>
        </div>
    )
}
