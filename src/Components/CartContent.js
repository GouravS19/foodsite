import React from 'react'
import CartBill from './CartBill'

export default function CartContent() {
    
    return (
        <div className='sm:grid sm:grid-cols-12 pl-[5%] pr-[4%] sm:pl-[10%] sm:pr-[8%] pt-[3.5%] pb-[5.2%] bg-[#e8ebed] ' >
            {/* it is for address part */}
            <div className='sm:col-span-8 mr-[3%]  w-full sm:w-fit'>
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
                            <h1 className='text-ba sm:text-lg font-semibold'>Select delivery address</h1>
                            <p className='text-[#676a6d] text-sm sm:text-base'>You have a saved address in this location
                            </p>
                        </div>
                    </div>
                        {/* for the address section box  */}
                    <div className='flex pt-5 sm:pt-10 gap-4 sm:gap-9 flex-col sm:flex-row'>
                        <div className='border flex-1 py-3 sm:py-5 px-4 flex gap-5 '>
                            <img src={require("../utils/images/home2.png") } alt='location' className='sm:size-5 size-4 mt-[.3rem]'/>
                            <div className=''>
                                <h2 className='text-base sm:text-lg font-semibold'>Home</h2>
                                <p className='text-[#91949e] sm:text-[.83rem] text-xs leading-tight pt-1 '>Near Courtyard Resort, Ward Number 13, Bankim Nagar, Siliguri, West Bengal, India</p>
                                <h3 className='pt-3 sm:pt-7 sm:text-[.85rem] text-sm font-semibold'>30 MINS</h3>
                                <button className='mt-3  px-6 py-[.5rem] text-xs sm:text-sm font-bold text-white bg-[#60b246]'>
                                    DELIVER HERE
                                </button>
                            </div>
                        </div>
                        <div className='flex-1 border py-4 px-3 sm:py-5 sm:px-4 flex gap-5 '>
                            <img src={require("../utils/images/locationB.png") } alt='location' className='size-4 sm:size-5 mt-[.3rem]'/>
                            <div>
                                <h2 className='text-base sm:text-lg font-semibold'>Add New Address</h2>
                                <p className='text-[#91949e] text-xs sm:text-[.83rem] leading-tight pt-1 '>Ward Number 13, Bankim Nagar, Siliguri, West Bengal, India</p>
                                <button className='mt-5 sm:mt-10 px-6 py-[.45rem] text-xs sm:text-sm font-semibold text-[#60b246] border border-[#60b246]'>
                                    ADD NEW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* foR second box */}
                    <div className=' bg-white mt-[3%] px-[5%] py-3 sm:py-5'>
                        {/* <div className='bg-white p-2 rounded-sm'>
                            <img src={require("../utils/images/wallet.png") } alt='location' className='size-5'/>
                        </div> */}
                        <h4 className='text-[#91949e] font-bold text-base sm:text-lg'>Choose payment method</h4>
                        <div className='w-full sm:mt-3 mt-2  py-2 sm:py-3 text-sm sm:text-base  font-bold text-white bg-[#60b246] flex justify-center'>
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
