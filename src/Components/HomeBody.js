import React from 'react'
import Dish from './Dish'
import { useSelector } from 'react-redux'
import TopRes from './TopRes';
import FilRes from './FilRes';
import { normalRes } from '../utils/mockData/forNormalRes';

export default function HomeBody() {
    // const name=useSelector((store)=>store.user.name)

    const slideLeft=()=>{
        var element = document.getElementById("res_con");
        console.log(element)
        element.scrollLeft -= 300;
    }
    const slideRight = () => {
        var element = document.getElementById("res_con");
        element.scrollLeft += 300;

    }
    // console.log(normalRes)
    return (
        <div className='pl-[9%] sm:px-[13%] pr-[10%] '>
            <div className='flex justify-between text-[1rem] sm:text-[1.45rem] font-bold pt-[6%] sm:pt-[2.2%]  items-center'>
                <h1 className=''>Name{}, what's on your mind?</h1>
                <div className='flex items-center'>
                    <button className='bg-[#ededf0] p-[.35rem] sm:p-2 rounded-full mr-3 text-white hover:bg-[#e3e3e8]' onClick={()=>{
                        slideLeft()
                    }}>
                        <img src={require("../utils/images/lar1.png")} alt='logo' className='h-[.6rem] sm:h-4'/>
                    </button>
                    <button className='bg-[#ededf0] p-[.35rem] sm:p-2 rounded-full mr-2 hover:bg-[#e3e3e8]' onClick={()=>{
                        slideRight()
                    }}>
                        <img src={require("../utils/images/rar2.png")} alt='logo' className='h-[.6rem] sm:h-4 bg-transparent '/>
                    </button>
                </div>
            </div>
            <Dish/>
            <hr className='border-[#e7e1e1] mt-[3%] mb-[1%]'/>
            <TopRes/>
            <hr className='border-[#e7e1e1]  mb-[1%] '/>
            <FilRes data={normalRes} />

        </div>
    )
}
