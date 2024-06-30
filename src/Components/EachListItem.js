import React from 'react'
import { Res_Item_img_url } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addItem, removeItem} from '../utils/cartSlice'

function EachListItem({data}) {
    const {name,defaultPrice,description,imageId}=data.card.info
    // console.log(data.card.info)
    const dispatch=useDispatch()
    const additemIntoCart=()=>{
        dispatch(addItem(data))
    }
    const removeItemIntoCart=()=>{
            dispatch(removeItem(data))
    }
    const cartData=useSelector((store)=>store.cart)
    const findcount=(data)=>{
        let count=0
        cartData.forEach(element => {
            if(element==data){
                count++
            }
        });
        return count
    }
    return (
        <div className='border-b-[1.5px] bg-white grid grid-cols-12 pt-5 sm:min-h-[28vh] min-h-[27vh] '>
            <div className='col-span-8 sm:col-span-9 sm:px-5 px-2'>
                <img src={require(`../utils/images/${data.card.info.isVeg?"veg":"nonVeg"}.png`)} alt='vegOrNonVeg' className='size-4 sm:size-[1.2rem] '/>
                <h1 className='text-base sm:text-lg font-bold text-[#404347]'>{name}</h1>
                <div className='flex items-center'>
                    <span className='mr-[.35rem] font-semibold text-[.95rem] sm:text-[1.02rem] '>₹{isNaN(defaultPrice/100)?"199 ":defaultPrice/100}</span>
                    <div className='text-xs text-[.7rem] font-bold text-[#676a6e]'>
                        <img alt='discount' src={require("../utils/images/tag.png")} className='size-3 inline mx-1 sm:mx-0'/>
                        20% OFF USE SWIGGYIT
                    </div>
                </div>
                <div className='sm:pt-3 pt-2 text-[#989da2] sm:text-[.9rem] sm:leading-[1.2rem] leading-tight text-[.7rem]'>
                    {description}
                </div>
            </div>
            {/* each image and add button */}
            <div className='col-span-4 sm:col-span-3  relative flex sm:items-start items-center'>
                <img src={Res_Item_img_url+imageId} alt='foodImage' className=' h-[70%] w-[110%] sm:h-[80%] sm:w-[90%] rounded-xl'/>
                {/* <button className='absolute font-bold text-green-600 text-lg left-[11%] bottom-[12%] w-[68%]  bg-white py-[.35rem] rounded-lg shadow-lg hover:bg-gray-200' onClick={additemIntoCart}>
                    ADD
                </button> */}
                <div className='absolute sm:text-lg  font-bold text-green-600 text-sm left-[11%] bottom-[7%] sm:bottom-[12%] w-[75%] sm:w-[68%]  bg-white rounded-lg shadow-lg  flex justify-between items-center'>
                    <div className='hover:bg-gray-200 w-full  py-[.35rem] flex justify-center rounded-l-lg' onClick={()=>{
                        removeItemIntoCart()
                    }}>-</div>
                    <div className='sm:px-4 px-2'>{findcount(data)==0?"ADD":findcount(data)}</div>
                    <div className='hover:bg-gray-200 w-full  py-[.35rem] flex justify-center rounded-r-lg' onClick={additemIntoCart}>+</div>

                </div>
            </div>
        </div>
    )
}

export default EachListItem