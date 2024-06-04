import React, { useState } from 'react'
import { normalRes } from '../utils/mockData/forNormalRes'
import ResCard from './ResCard'
import FilRes2 from './FilRes2'

export default function FilRes() {
    // let filRes=normalRes
    const [filRes,setFilres]=useState(normalRes)
    console.log(filRes)
    return (
        <>
            <h1 className='text-lg sm:text-2xl font-bold mt-7'>Restaurants with online food delivery in Bangalore</h1>
            <div className='mt-3 mb-7'>
                <button className='mr-3 px-3 py-[6px] rounded-full border-[1.5px] border-[#e7e1e1] sm:text-base text-sm'>Rating 4.5+</button>
                <button className='px-3 py-[6px] rounded-full border-[1.5px] border-[#e7e1e1] sm:text-base text-sm'>Fast Delivery</button>
            </div>
            <FilRes2 resData={filRes}/>
        </>
    )
}
