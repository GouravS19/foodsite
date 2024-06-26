import React, { useState } from 'react'
import { useResData } from '../customHooks/useResData'
// import { SiSwiggy } from "react-icons/si";
// import { IoSearch } from "react-icons/io5";
// import { VscAccount } from "react-icons/vsc";
import {useSelector} from "react-redux"
// import Hamburger from './x/Hamburger';
// import { PiShoppingCartLight } from "react-icons/pi";
import {Link} from "react-router-dom"


export const Header=()=> {
    useResData();
    // let userName=useSelector((store)=>{return store.user.name})
    // const [isHamOpen,setisHamOpen]=useState(false)
    
    return (
        <div className='grid grid-cols-12  pl-[8%] sm:pl-[8.5%] py-[.85rem] shadow-md'>
            {/* for img div  */}
            <div className='col-span-2'>
            <Link to="/home"><img src='https://cdn.worldvectorlogo.com/logos/swiggy-1.svg' alt='logo' className='h-[6.7vh] '/></Link>
            </div>
            {/*  for all icons div  */}
            <div className='flex col-span-10 justify-end gap-[7%] sm:gap-[10%] items-center pr-[8%] sm:pr-[10%] '>
                <div className='flex items-center  text-sm sm:text-base hover:text-[#fb8019] cursor-pointer'>
                    <img src={require("../utils/images/search.png")} alt='logo' className='h-5 sm:h-[1.2rem]'/> <Link to="/home/search"><span className='pl-2 font-semibold hidden sm:inline'>Search</span></Link>
                </div>
                
                <div className='flex items-center text-sm sm:text-base hover:text-[#fb8019] cursor-pointer'><img src={require("../utils/images/dp1.png")} alt='logo' className='h-6 sm:h-[1.5rem] '/><span className='pl-2 hidden sm:inline font-semibold'>Name{}</span></div>
                <div className='flex items-center text-sm sm:text-base hover:text-[#fb8019] cursor-pointer'><img src={require("../utils/images/bag.png")} alt='logo' className='h-8 inline'/><span className='pl-1  font-semibold hidden sm:inline'>Cart{}</span></div>
            </div>
            
        </div>
    )
}
