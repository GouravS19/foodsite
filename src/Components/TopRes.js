import React from 'react'
import ResCard from './ResCard';
import { useSelector } from 'react-redux';
import { top_res_data } from '../utils/mockData/forTopRes';

export default function TopRes() {
    const slideLeft=()=>{
        var element = document.getElementById("top_res");
        console.log(element)
        element.scrollLeft -= 700;
    }
    const slideRight = () => {
        var element = document.getElementById("top_res");
        element.scrollLeft += 700;

    }
    // const top_res_arr=useSelector((store)=>{
    //     return store.topRes
    // })
    // console.log(top_res_arr)
    return (
        <div>
            <div className='grid grid-cols-12 text-[1rem] sm:text-[1.45rem] font-bold pt-[6%] sm:pt-[2.2%]  items-center'>
                    <h1 className='col-span-8'>Top restaurant chains in Bangalore</h1>
                    <div className='flex items-center col-span-4 justify-end'>
                        <button className='bg-[#ededf0] p-[.35rem] sm:p-2 rounded-full mr-3 text-white hover:bg-[#e3e3e8]' onClick={()=>{
                            slideLeft()
                        }}>
                            <img src={require("../utils/images/lar1.png")} alt='logo' className='h-[.6rem] sm:h-4'/>
                        </button>
                        <button className='bg-[#ededf0] p-[.35rem] sm:p-2 rounded-full mr-2 hover:bg-[#e3e3e8] ' onClick={()=>{
                            slideRight()
                        }}>
                            <img src={require("../utils/images/rar2.png")} alt='logo' className='h-[.6rem] sm:h-4 bg-transparent '/>
                        </button>
                    </div>
            </div>
             {/* div for top restaurant */}
            <div className='flex mt-8  overflow-scroll scroll-smooth ' id='top_res'>
                {top_res_data.map((resData)=>{ 
                    return <ResCard resData={resData} key={resData.info.id}/>
                })}

            </div>
        </div>
    )
}
