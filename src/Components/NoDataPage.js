import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function NoDataPage({textData,image}) {
    const navigate=useNavigate()
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-[75vh] pt-14'>
                <img src={image} alt='cook' className='h-[260px] w-[310px]'/>
                <h1 className='pt-5 text-[#545766] text-[1.35rem] font-semibold'>{textData.firstText}</h1>
                <p className='font-normal text-[#7e808c] mt-2 mb-6 text-sm tracking-wide'>{textData.secondText}</p>
                <button className='py-[.65rem] px-6 bg-[#fc7f19] font-bold text-white text-[.9rem]' onClick={
                ()=>{
                    navigate('/home')
                }
                }>
                {textData.thirdText}
                </button>
            </div>
        </div>
    )
}
