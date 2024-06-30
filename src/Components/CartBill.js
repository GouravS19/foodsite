import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EachOrderEle from './EachOrderEle'
import { clearCart } from '../utils/cartSlice'
import { FaLess } from 'react-icons/fa'

export default function CartBill() {
    const cartData=useSelector((store)=>store.cart)
    const dispatch=useDispatch()
    // console.log(cartData)
    let totalBill=0
    cartData.forEach(element => {
        // totalBill+=Number(((isNaN(element.card.info.price/100))?199:element.card.info.price/100).toFixed(2))
        totalBill+=(element.card.info.price)?element.card.info.price/100:199
    });
    let delPartnerFee=21
    const [delTip,setDelTip]=useState(0)
    let platfee=19
    let gst=Number((totalBill*3/100).toFixed(2))
    let actBill=Number((totalBill+delPartnerFee+delTip+platfee+gst).toFixed(2))
    // const [actBill,setActBill]=useState(0)
    

    const tipRef=useRef(null)
    const tipDivRef=useRef(null)
    const appearTip=()=>{
        tipDivRef.current.classList.remove("hidden")
        tipRef.current.classList.add("hidden")
    }
    const tipClick=()=>{
        let valTip=Number(document.querySelector("#tipIt").value)
        setDelTip(valTip)
        tipDivRef.current.classList.add("hidden")
        tipRef.current.classList.remove("hidden")

    }

    const clearcrt=()=>{
        dispatch(clearCart())
    }

    const findcount=(data)=>{
        let count=0
        cartData.forEach(element => {
            if(element==data){
                count++
            }
        });
        return count
    }
    const canshow=(element,ind)=>{
        if(findcount(element)>1){
            for(let i=0;i<ind;i++){
                if(element!==cartData[i]){
                    if(i==ind-1){
                        return true
                    }
                    continue
                }
                else{
                    return false
                }

            }
            return true
        }
        else{
            return true
        }
    }
    return (
        <div className='col-span-4 min-w-[20vw]  bg-white px-6 pt-6 pb-2' >
            <div className='pb-4 text-[#91949e] font-bold text-lg '>
                {"Check Out point".toLocaleUpperCase()}
            </div>
            <div className=''>
                {
                    
                    cartData.map((element,ind) => {
                        return canshow(element,ind)?<EachOrderEle data={element} key={ind}/>:""
                        // return <EachOrderEle data={element}/>
                    })
                }
            </div>
            <div className='w-full my-5  flex p-4 bg-[#ebeced] '>
                <img src={require("../utils/images/coma.png")} alt='coma' className='size-4 mr-2'/>
                <input type='text' placeholder='Any suggestions? We will pass it on..' className='outline-none w-full text-sm font-semibold bg-[#ebeced]'/>
            </div>
            <div className='flex p-4  border-[1.5px] border-dotted items-center  font-semibold text-sm  text-[#91949e] '>
                <img src={require("../utils/images/dis2.png")} alt='coma' className='size-7 mr-2'/>
                <p>Apply Coupon</p>
            </div>
            {/* billing part  */}
            <div className='mt-7'>
                <h2 className='font-semibold'>Bill Details</h2>
                <div className='flex justify-between text-[#91949e] text-sm mt-2'>
                    <p>Item Total</p>
                    <p>₹{totalBill.toFixed(2)}</p>
                </div>
                <div className='flex justify-between text-[#91949e] text-sm mt-2 pb-5 border-b-[1.25px]'>
                    <p>Delivery partner fee</p>
                    <p>₹{delPartnerFee}</p>
                </div>
                <div className='flex justify-between text-[#91949e] text-sm mt-4 items-center'>
                    <p>Delivery Tip</p>
                    {/* <div>
                        {(delTip==0)?<p className='text-orange-400 font-semibold '>Add Tip</p>:<p>₹{delTip}</p>}
                    </div> */}

                    
                    <div ref={tipRef} onClick={appearTip} className='cursor-pointer'>
                        {
                            (delTip==0)?<p className='text-orange-400 font-semibold '>Add Tip</p>:<p>₹{delTip}</p>
                        }
                    </div>
                    <div className='hidden ' ref={tipDivRef} >
                        <div className='flex justify-end'>
                            <input type='number' placeholder='Type your Tip' id="tipIt" className=' outline-none inline-block border-b-2 text-center mr-5 font-semibold' />
                            <button onClick={tipClick} className='py-1 px-6 font-bold text-white bg-[#60b246]'>Tip</button>
                        </div>
                    </div>
                    {/* <input type='number' className=' w-14' value={delTip}/> */}
                </div>
                <div className='flex justify-between text-[#91949e] text-sm mt-2'>
                    <p>Platform Fee</p>
                    <p>₹{platfee}</p>
                </div>
                <div className='flex justify-between text-[#91949e] text-sm mt-2 pb-5 border-b-[1.75px] border-[#282c3f]'>
                    <p>GST and Restaurant Charge</p>
                    <p>₹{gst}</p>
                </div>
                <div className='flex justify-between text-[#282c3f] text-sm mt-5 font-bold '>
                    <p>TO PAY</p>
                    <p>₹{actBill}</p>
                </div>
                <div className=' mt-5 mb-3'>
                    <button className=' py-[.6rem] w-full  text-sm font-bold text-white bg-[#60b246]' onClick={clearcrt}>CLEAR CART</button>
                </div>
            </div>
        </div>
    )
}
