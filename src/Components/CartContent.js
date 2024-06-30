import React from 'react'
import CartBill from './CartBill'

export default function CartContent() {
    
    return (
        <div className='grid grid-cols-12 pl-[10%] pr-[8%] pt-[3.5%] pb-[5.2%] bg-[#e8ebed] ' >
            {/* it is for address part */}
            <div className='col-span-8 mr-[3%]'>
                <div className='bg-white px-[6%] py-[5%]'>
                    {/* for first box */}
                        {/* for the image part  */}
                    <div className='flex items-center '>
                        {/* <div className=''>
                            <div className='bg-black p-2 rounded-sm'>
                                <img src={require("../utils/images/locationW.png") } alt='location' className='size-7'/>
                            </div>
                        </div> */}
                        
                        <div className=' '>   {/*ml-5*/}
                            <h1 className='text-lg font-semibold'>Select delivery address</h1>
                            <p className='text-[#676a6d]'>You have a saved address in this location
                            </p>
                        </div>
                    </div>
                        {/* for the address section box  */}
                    <div className='flex  pt-10 gap-9'>
                        <div className='border flex-1 py-5 px-4 flex gap-5 '>
                            <img src={require("../utils/images/home2.png") } alt='location' className='size-5 mt-[.3rem]'/>
                            <div className=''>
                                <h2 className='text-lg font-semibold'>Home</h2>
                                <p className='text-[#91949e] text-[.83rem] leading-tight pt-1 '>Near Courtyard Resort, Ward Number 13, Bankim Nagar, Siliguri, West Bengal, India</p>
                                <h3 className='pt-7 text-[.85rem] font-semibold'>30 MINS</h3>
                                <button className='mt-3  px-6 py-[.5rem] text-sm font-bold text-white bg-[#60b246]'>
                                    DELIVER HERE
                                </button>
                            </div>
                        </div>
                        <div className='flex-1 border py-5 px-4 flex gap-5 '>
                            <img src={require("../utils/images/locationB.png") } alt='location' className='size-5 mt-[.3rem]'/>
                            <div>
                                <h2 className='text-lg font-semibold'>Add New Address</h2>
                                <p className='text-[#91949e] text-[.83rem] leading-tight pt-1 '>Ward Number 13, Bankim Nagar, Siliguri, West Bengal, India</p>
                                <button className='mt-10 px-6 py-[.45rem] text-sm font-semibold text-[#60b246] border border-[#60b246]'>
                                    ADD NEW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* foR second box */}
                    <div className=' bg-white mt-[3%] px-[5%]  py-5'>
                        {/* <div className='bg-white p-2 rounded-sm'>
                            <img src={require("../utils/images/wallet.png") } alt='location' className='size-5'/>
                        </div> */}
                        <h4 className='text-[#91949e] font-bold text-lg'>Choose payment method</h4>
                        <div className='w-full mt-3   py-3  font-bold text-white bg-[#60b246] flex justify-center'>
                            PROCEED TO PAY
                        </div>
                    </div>
                </div>
            </div>
            {/* it is for billing part  */}
            <CartBill/>
        </div>
    )
}
