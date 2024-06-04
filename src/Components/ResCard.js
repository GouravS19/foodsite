import React from 'react'
// import { resData } from '../utils/mockData/forResCard'
import { IMG_URL } from '../utils/constants'
export default function ResCard({resData}) {
    return (
        <div className=' mr-7 cursor-pointer hover:scale-95 ease-in duration-200 mb-9'>
            <div className='relative w-[150px] h-[90px] sm:w-[280px] sm:h-[180px] overflow-hidden'>
                <img src={IMG_URL+resData.info.cloudinaryImageId} alt='res' className='object-cover w-[100%] h-[100%]  rounded-2xl'/>
                <p className='p_price  bg-transparent bg-black w-full  rounded-b-lg  absolute bottom-0 pl-2 sm:pl-4 pb-1 sm:pb-3 pt-10 text-white text-sm sm:text-[1.8rem] font-bold font-bn tracking-wide'>{resData.info.costForTwo.toUpperCase()}</p>
            </div>
            <div className='pl-4 mt-2 sm:text-base text-sm' >
                <h1 className='text-sm sm:text-lg font-semibold'>{resData.info.name}</h1>
                <p className='flex items-center text-xs sm:text-base font-semibold'>
                    <img src={require("../utils/images/star.png")} alt='logo' className='h-5 mr-2 sm:h-[1.2rem] inline'/>
                    {resData.info.avgRating}
                    <div className='size-1 rounded-full bg-black inline-block mx-2'></div>
                    {resData.info.sla?.slaString}
                </p>
                <div className='text-xs sm:text-base font-thin'>{resData.info.cuisines?.slice(0,3).join(', ')}</div>
            </div>
        </div>
    )
}
