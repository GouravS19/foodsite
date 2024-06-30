import React from 'react'
import CartBill from './CartBill'

export default function CartContent() {
    return (
        <div>
            {/* it is for address part */}
            <div>content of address</div>
            {/* it is for billing part  */}
            <CartBill/>
        </div>
    )
}
