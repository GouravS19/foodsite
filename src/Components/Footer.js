import React from 'react'

export default function Footer() {
  return (
    <div className=''>
      {/* for mobile */}
      <div className='sm:hidden bg-[#f2f5f4] py-14 pl-[8%] text-[#85898c] '>
        <div className='text-[3.5rem] text-5xl font-semibold' >
        Live 
        <br/>
        it Up!
        </div>
        <div className='pt-6 '>
          crafted with <img alt='love' src={require("../utils/images/love.png") } className='inline size-5'/> by Gourav
        </div>
      </div>
      {/* mobile finish here */}
      <div className="hidden sm:block">

        <div className='grid grid-cols-2 place-items-center bg-[#f0f0f5] py-3 sm:py-4 px-[10%] '>
          <div className='text-xs sm:text-2xl font-bold  text-[#5f6064] '>
              For better experience,download 
              <br/>
              the Swiggy app now
          </div>
          <div className='flex justify-center'>
              <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png' alt='play' className='w-[50%] sm:w-[31%] mr-5'/>
              <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png' alt='ios'  className='w-[50%] sm:w-[31%]'/>
          </div>
        </div>
        {/* main footer */}
        <div className='  grid grid-cols-4 sm:pl-[15.7%] sm:pr-[6%] py-7 text-[#f0f0f5] bg-black font-thin text-xs sm:text-base'>
          <div>
              <div className='flex items-center cursor-pointer'>
                <img src={require("../utils/images/sblacklogo.jpeg") } alt='logo' className='h-9 sm:h-14 '/>
                <p className='text-sm sm:text-2xl font-bold text-white'>Swiggy</p>
              </div>
              <p className='pl-4 mt-2'>© 2024 Bundl Technologies <br/>Pvt. Ltd</p>
          </div>
          <div>
              <ul className='grid gap-2 cursor-pointer pl-2 sm:pl-0'>
                <li className='text-sm pt-[0.44rem] sm:pt-0 sm:text-lg font-bold text-white'>Company</li>
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Genie</li>
              </ul>
          </div>
          <div>
              <ul className='grid gap-2 cursor-pointer'>
                <li className='text-sm pt-[0.44rem] sm:pt-0 sm:text-lg font-bold text-white'>Contact us</li>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
                <li className='text-sm  sm:text-lg font-bold text-white mt-5'>Legal</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Investor Relations</li>
              </ul>
          </div>
          <div>
              <ul className='grid gap-2 cursor-pointer'>
                <li className='text-sm pt-[0.44rem] sm:pt-0 sm:text-lg font-bold text-white'>We deliver to:</li>
                <li>Bengalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai </li>
                <li>Pune</li>
                <li>589+ cities</li>
              </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
