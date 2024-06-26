import React, { useRef, useState } from 'react'
import Dish from './Dish'
// import { resData } from '../utils/mockData/forResCard'
import { normalRes } from '../utils/mockData/forNormalRes'
import FilRes2 from './FilRes2'
import { top_res_data } from '../utils/mockData/forTopRes'
export default function Search() {
  const searchVal=useRef(null)
  const [searchRes,setSearchRes]=useState([])
  const doSearch=()=>{
      let val=searchVal.current.value.toLowerCase()
      console.log(val)
      setSearchRes(normalRes.filter((res)=>{
          if(res.info.name.toLowerCase().includes(val)){
            return res
          }
      }))
      
      console.log(searchRes)
  }
  return (
    <div className='px-[17%]'>
      <div className='flex items-center overflow-hidden border-2 mt-24'>
        <input type='text' ref={searchVal} placeholder='Search for restaurnats and food' className='border-none outline-none p-[10px] flex-grow font-semibold pl-5'/>
        <button className='border-none bg-none cursor-pointer p-[10px]' onClick={doSearch}>
          <img src={require("../utils/images/search.png")} alt='logo' className='w-[20px] h-[20px]'/>
        </button>
      </div>
      <div className='mb-10'>
        <h1 className='text-lg sm:text-xl font-bold mt-7 text-[#3c4052]'>Popular Cuisines</h1>
        <Dish/>
        <div className='mt-10'>
            <FilRes2 resData={searchRes}/>
        </div>

      </div>
    </div>
  )
}
