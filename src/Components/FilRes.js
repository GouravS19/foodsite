import React, { useState } from 'react'
// import { normalRes } from '../utils/mockData/forNormalRes'
import ResCard from './ResCard'
import FilRes2 from './FilRes2'

export default function FilRes({data}) {
    // let filRes=normalRes
    // console.log(data)
    const [filRes,setFilres]=useState(data)
    // console.log(filRes)
    const ratingfilter=()=>{
        setFilres(filRes.filter((res)=>{
            if( res.info.avgRating>4.2){
                return res
            }
        }))
    }
    const reset=()=>{
        setFilres(data)
    }
    const fastDelivery=()=>{
        setFilres(filRes.filter((res)=>{
            if(res.info.sla.deliveryTime<40){
                return res
            }
        }))
    }
    return (
        <>
            <h1 className='text-lg sm:text-2xl font-bold mt-7'>Restaurants with online food delivery in Bangalore</h1>
            <div className='mt-3 mb-7'>
                <button className='mr-3 px-3 py-[6px] rounded-full border-[1.5px] border-[#e7e1e1] sm:text-base text-sm' onClick={ratingfilter}>Rating 4.2+</button>
                <button className='mr-3 px-3 py-[6px] rounded-full border-[1.5px] border-[#e7e1e1] sm:text-base text-sm' onClick={fastDelivery}>Fast Delivery</button>
                <button className='px-3 py-[6px] rounded-full border-[1.5px] border-[#e7e1e1] sm:text-base text-sm mt-2 sm:mt-0' onClick={reset}>Reset </button>

            </div>
            <FilRes2 resData={filRes}/>
        </>
    )
}
