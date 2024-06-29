import React, { useState } from 'react'
import empty from '../utils/images/emptyCart.avif'
import { useNavigate } from 'react-router-dom'
export default function Cart() {
  const navigate =useNavigate()
  const [cartData,setCartData]=useState([])
  if(cartData.length==0){
    return (
      <div>
          <div className='flex flex-col justify-center items-center h-[75vh]'>
            <img src={empty} alt='cook' className='h-[290px] w-[310px]'/>
            <h1 className='pt-5 text-[#545766] text-[1.35rem] font-semibold'>Your cart is empty</h1>
            <p className='font-normal text-[#7e808c] mt-2 mb-6 text-sm tracking-wide'>You can go to home page to view more restaurants</p>
            <button className='py-[.65rem] px-6 bg-[#fc7f19] font-bold text-white text-[.9rem]' onClick={
              ()=>{
                navigate('/home')
              }
            }>
              SEE RESTAURANTS NEAR YOU
            </button>
  
          </div>
      </div>
    )
  }
  
}
