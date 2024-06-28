import React from 'react'
import { Res_Item_img_url } from '../utils/constants'

function EachListItem({data}) {
    const {name,defaultPrice,description,imageId}=data.card.info
    // console.log(data.card.info)
    return (
        <div className='border-b-[1.5px] bg-white grid grid-cols-12 pt-5 min-h-[28vh]'>
            <div className='col-span-9 px-5'>
                <img src={require(`../utils/images/${data.card.info.isVeg?"veg":"nonVeg"}.png`)} alt='vegOrNonVeg' className='size-[1.2rem]'/>
                <h1 className='text-lg font-bold text-[#404347]'>{name}</h1>
                <div className='flex items-center'>
                    <span className='mr-[.35rem] font-semibold text-[1.02rem]'>₹{isNaN(defaultPrice/100)?"199 ":defaultPrice/100}</span>
                    <div className='text-xs font-bold text-[#676a6e]'>
                        <img alt='discount' src={require("../utils/images/tag.png")} className='size-3 inline'/>
                        20% OFF USE SWIGGYIT
                    </div>
                </div>
                <div className='pt-3 text-[#676a6e] text-[.95rem] leading-[1.2rem]'>
                    {description}
                </div>
            </div>
            {/* each image and add button */}
            <div className='col-span-3  relative'>
                <img src={Res_Item_img_url+imageId} alt='foodImage' className=' h-[80%] w-[90%] rounded-xl'/>
                <button className='absolute font-bold text-green-600 text-lg left-[11%] bottom-[12%] w-[68%]  bg-white py-[.35rem] rounded-lg shadow-lg'>
                    ADD
                </button>
            </div>
        </div>
    )
}

export default EachListItem