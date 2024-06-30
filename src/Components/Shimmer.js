import React from 'react'

export default function Shimmer() {
  const coloris=' bg-[#ededf2] rounded-md'
  return (
    <div className='mx-[4.5%] sm:mx-[23%] mt-[5%]'>
      <div className={"w-[90vw] sm:w-[30vw] h-[5vh] mb-9 "+coloris}></div>
      <div  className={"w-[90vw] sm:w-[45vw] bg-[#cecedf] h-[30vh] "+coloris}></div>
      <div  className={"w-[90vw] sm:w-[30vw] bg-[#cecedf] h-[5vh] my-9 "+coloris}></div>
      <div className={"w-[90vw] sm:w-[45vw] bg-[#cecedf] h-[10vh] "+coloris }></div>
      <div className={"w-[90vw] sm:w-[30vw] bg-[#cecedf] h-[5vh] my-5 "+coloris}></div>
      <div className={"w-[90vw] sm:w-[45vw] bg-[#cecedf] h-[10vh] "+coloris}></div>
    </div>
  )
}
