import React, { useState } from 'react'
import empty from '../utils/images/emptyCart.avif'
import NoDataPage from './NoDataPage'
import { useSelector } from 'react-redux'
import CartContent from './CartContent'
export default function Cart() {
  const data={
    firstText:"Your cart is empty",
    secondText:"You can go to home page to view more restaurants",
    thirdText:"SEE RESTAURANTS NEAR YOU"
  }
  const img=empty
  const cartItems=useSelector((store)=>{
    return store.cart
  })
  // const [cartData,setCartData]=useState(cartItems)
  if(cartItems.length==0){
    return (
      <NoDataPage textData={data} image={img} />
    )
  }
  return(
    <div >
      <CartContent/>
    </div>
  )
  
}
