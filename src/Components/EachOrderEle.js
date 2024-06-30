import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice'

export default function EachOrderEle({data}) {
    const {name,price,isVeg}=data.card.info
    console.log(data)
    const cartData=useSelector((store)=>store.cart)
    const dispatch=useDispatch()
    const findcount=(data)=>{
        let count=0
        cartData.forEach(element => {
            if(element==data){
                count++
            }
        });
        return count
    }
    const addItm=(data)=>{
        dispatch(addItem(data))
    }
    const removeItm=()=>{
        dispatch(removeItem(data))
    }
    return (
        <div className='grid  grid-cols-12 items-center gap-3 mt-5 '>
            <div className='col-span-7 text-sm flex items-start gap-1'>
                <img src={require(`../utils/images/${(isVeg==1)?"veg":"nonVeg"}.png`)} alt='nonVegOrVeg' className='size-[1.13rem] inline'/>
                <p>{name}</p>
            </div>
            <div className='border col-span-3 font-bold text-green-600 text-lg bg-white flex justify-between items-center'>
                    <div className='hover:bg-gray-200 w-full  py-[.35rem] flex justify-center ' onClick={()=>{
                        removeItm(data)
                    }} >-</div>
                    <div className='px-2'>{findcount(data)}</div>
                    <div className='hover:bg-gray-200 w-full  py-[.35rem] flex justify-center ' onClick={()=>{
                        addItm(data)
                    }}>+</div>

                </div>
            <div className='col-span-2 flex justify-end'>
                {price?price/100:199}
            </div>
        </div>
    )
}
