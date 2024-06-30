import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function CartPopUp() {
    const cartItems=useSelector((store)=>{
        return store.cart
    })
    const navigate=useNavigate()
    const cartItemslength=()=>{
        let length=1
        for(let i=0;i<cartItems.length;i++){
            for(let j=i+1;j<cartItems.length;j++){
                if(cartItems[i]!==cartItems[j]){
                    if(j==cartItems.length-1)
                    {
                        length++
                    }
                    continue
                }
                else{
                    break;
                }
            }
        }
        return length
    }
    return (
        <div className={` fixed bottom-0 left-0 w-full bg-[#5aae40] text-white py-5 px-[4%]  justify-between items-center shadow-lg font-bold ${(cartItems.length==0)?"hidden":"flex"}`}>
                    <div>
                        <p>{cartItemslength()} item added</p>
                    </div>
                    <div>
                        <button className="flex items-center text-sm " onClick={()=>{
                            navigate('/res/cart')
                        }}>
                            <p>VIEW CART</p>
                            <img alt='cart' src={require("../utils/images/bagw.png")} className='h-8'/>
                        </button>

                    </div>
        </div>
    )
}
