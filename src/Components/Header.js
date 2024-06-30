import React, { useState } from 'react'
import { useResData } from '../customHooks/useResData'
// import { SiSwiggy } from "react-icons/si";
// import { IoSearch } from "react-icons/io5";
// import { VscAccount } from "react-icons/vsc";
import {useDispatch, useSelector} from "react-redux"
// import Hamburger from './x/Hamburger';
// import { PiShoppingCartLight } from "react-icons/pi";
import {Link, useNavigate} from "react-router-dom"
import { removeUser } from '../utils/userSlice'


export const Header=()=> {
    useResData();
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // let userName=useSelector((store)=>{return store.user.name})
    // const [isHamOpen,setisHamOpen]=useState(false)
    const doLogOut=()=>{
        dispatch(removeUser())
        navigate("/")

    }
    const userName=useSelector((store)=>{return store.user.name})
    const userEmail=useSelector((store)=>{return store.user.email})
    const favclick=()=>{
        navigate("/res/favourites")
    }
    return (
        <div className='grid grid-cols-12  pl-[8%] sm:pl-[8.5%] py-[.85rem] shadow-md'>
            {/* for img div  */}
            <div className='col-span-2'>
            <Link to="/home"><img src='https://cdn.worldvectorlogo.com/logos/swiggy-1.svg' alt='logo' className='h-[6.7vh] '/></Link>
            </div>
            {/*  for all icons div  */}
            <div className='flex col-span-10 justify-end gap-[7%] sm:gap-[10%] items-center pr-[8%] sm:pr-[10%] '>
                <div className='text-sm sm:text-base hover:text-[#fb8019] cursor-pointer'>
                    <Link to="/home/search" className='flex items-center  '>
                        <img src={require("../utils/images/search.png")} alt='logo' className='h-5 sm:h-[1.2rem]'/> 
                        <span className='pl-2 font-semibold hidden sm:inline'>Search</span>
                    </Link>
                </div>
                
                <div className=' text-sm sm:text-base  cursor-pointer group relative'>
                    <div className='flex items-center hover:text-[#3e3d3c]'>
                        <img src={require("../utils/images/dp1.png")} alt='logo' className='h-6 sm:h-[1.5rem] '/>
                        <span className='pl-2 hidden sm:inline font-semibold'>
                            {userName?userName:"Name"}
                        </span>
                    </div>
                    <div className='hidden absolute dropdown-menu pt-[1.6rem] sm:pt-[1.6rem]  z-10 -left-20 sm:-left-10 text-xs sm:text-sm font-semibold'> 
                        <div className=' bg-white py-4 sm:py-6 px-7 sm:px-9 rounded-b-sm  border-t-[#fc8019] border-t-2  shadow-2xl '>
                            <div className='text-[#85898c] hover:text-[#474747]'>
                                {userName?userName:"Name"}</div>
                            <div className='py-5 text-[#85898c] hover:text-[#474747]'>
                                {userEmail?userEmail:"email@gmail.com"}
                            </div>
                            <div className='pb-5 text-[#85898c] hover:text-[#474747]' onClick={favclick}>Favourites</div>
                            <div className='text-[#85898c] hover:text-[#474747]' onClick={doLogOut}>Log Out</div>
                        </div>
                    </div>
                    
                </div>
                <div className=' text-sm sm:text-base hover:text-[#fb8019] cursor-pointer'>
                    <Link to='/res/cart' className='flex justify-center items-center'>
                        <img src={require("../utils/images/bag.png")} alt='logo' className='h-8 inline'/>
                        <span className='pl-1  font-semibold hidden sm:inline'>Cart{}</span>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
