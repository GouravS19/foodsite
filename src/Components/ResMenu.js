import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ResMenu_URL } from '../utils/constants'
import Shimmer from './Shimmer'
import MenuSection from './MenuSection'
import generic from "../utils/images/generic.avif"
import delivery from "../utils/images/deli.avif"
import oneLite from "../utils/images/oneLite.avif"
import Footer from './Footer'

const CuponBox=({offer,cupon})=>{
    return (
        <div className='border border-[#dadae0] flex  pl-4   py-3 min-w-[43%] rounded-3xl mr-10 my-6'>
                    {/* <img alt='cupon' src={require('../utils/images/dist.png')} className='size-12'/> */}
                    <img alt='cupon' src={generic} className='size-12 mr-[4%]'/>
                    <div>
                        <span className='font-bold text-base'>{offer}</span>
                        <br/>
                        <span className='text-sm font-semibold text-[#616161]'>{cupon?cupon:"USE SWIGGY"}</span>
                    </div>

        </div>
    )
}
export default function ResMenu() {
    const {resIdis}=useParams()
    // console.log(resIdis)
    const [data,setData]=useState(null)
    const fetchData=()=>{
        fetch(ResMenu_URL+resIdis)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setData(res.data.cards)
            // console.log(data)
        })
    }
    //! console.log(data)
    function slideLeft(){
        var element = document.getElementById("cupon_box");
        console.log(element)
        element.scrollLeft -= 300;
    }
    function slideRight(){
        var element = document.getElementById("cupon_box");
        console.log(element)
        element.scrollLeft += 300;
    }
    
    useEffect(()=>{
        fetchData();
    },[])
    if(data==null){
        return <Shimmer/>
    }
    // console.log(data[3].card.card.gridElements.infoWithStyle.offer)
    return (
        <div>
            <div className='mx-[23%] mt-[5%] text-[#191c21]'>
                {/* it is for the box part of the page */}
                <div>
                    <h1 className='text-[1.75rem] font-bold text-[#3f3f3f]'>{data[0].card.card.text}</h1>
                    <div className='border-[17px]  borderIt mb-8 mt-2'>
                        <div className='border-2 rounded-t-xl    pt-5'>
                            <div className='flex items-center pl-[3%] font-bold text-lg'>
                                    <img src={require("../utils/images/star.png")} alt='logo' className='h-5 mr-2 sm:h-[1.2rem] inline'/>
                                    <span>{data[2].card.card.info.avgRatingString} ({data[2].card.card.info.totalRatingsString})  </span>
                                    <div className='inline-block h-[.35rem] w-[.35rem] bg-[#919197] rounded-full mx-3 '></div>
                                    <span>{data[2].card.card.info.costForTwoMessage}</span>
                            </div>
                            <div className='pl-[3%] mt-[.7%] font-bold text-[#f25900] text-sm'>{data[2].card.card.info.cuisines.join(", ")}</div>
                            <div className='pl-[3%] pt-3 '>
                                <span className='font-bold text-sm mr-2'>Outlet </span> <span className='font-light text-[#745656]'>{data[2].card.card.info.locality}</span>
                            </div>
                            <div className='font-bold text-sm pl-[3%] pt-2 pb-4'><span className='text-base'>35-40</span> min</div>

                            
                            {/* <div>{data[2].card.card.info.nearestOutletNudge.nearestOutletInfo.siblingOutlet.sla.deliveryTime} mins</div> */}
                            <hr/>
                            <div className='pl-[3%] py-3 text-[#616161] text-sm'>
                                <img alt='del' src={delivery} className='inline size-6 mr-3'/>Order above 149 for discounted delivery fee
                            </div>
                            <hr/>
                            <div className='pl-[3%] py-3  text-sm font-bold  text-[#f25900] oneLite' >
                                <img alt='del' src={oneLite} className='inline w-12 h-5 mr-3'/>Free delivery on orders above ₹199
                            </div>
                        </div>
                    </div>
                </div>
                {/* for deals or cupon section */}
                <div className='flex justify-between'>
                    <div className='text-xl font-bold'>
                        Deals for you
                    </div>
                    <div className='flex items-center'>
                        <button className='bg-[#ededf0] p-[.35rem] sm:p-2 rounded-full mr-3 text-white hover:bg-[#e3e3e8]' onClick={()=>{
                            slideLeft() 
                        }}>
                            <img src={require("../utils/images/lar1.png")} alt='logo' className='h-[.6rem] sm:h-4'/>
                        </button>
                        <button className='bg-[#ededf0] p-[.35rem] sm:p-2 rounded-full mr-2 hover:bg-[#e3e3e8]' onClick={()=>{
                            slideRight()
                        }}>
                            <img src={require("../utils/images/rar2.png")} alt='logo' className='h-[.6rem] sm:h-4 bg-transparent '/>
                        </button>
                    </div>
                </div>
                <div id='cupon_box' className='flex  overflow-scroll scroll-smooth  items-center'>
                    {
                        data[3].card.card.gridElements.infoWithStyle.offers.map((ele,ind)=>{
                            return <CuponBox offer={ele.info.header} key={ind} cupon={ele.info.couponCode}/>
                        })
                    }
                </div>
                {/* cupon part ends here  */}
                <div className='flex justify-center font-semibold text-xl my-5  text-[#b5b5bc]'>
                    Menu
                </div>
                <div >
                    {
                        // data[data.length-1].groupedCard.cardGroupMap.REGULAR.cards.map((item,ind)=>{
                        //     if(ind==0){
                        //         return(<h1 key={ind}>hello</h1>)
                        //     }
                        //     return <MenuSection data={item} key={ind}/>
                        // })
                        data[data.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards.map(
                            (ele,ind)=>{
                                if(
                                    ind>0 
                                    && 
                                    ind<data[data.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards.length-2
                                )
                                {
                                    if(ind<3){
                                        return(<MenuSection data={ele} key={ind} show={true}/>)   
                                    }
                                    return(<MenuSection data={ele} key={ind} show={false}/>)   
                                }
                            }
                        )
                    }
                    {/* <MenuSection data={data[data.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards[1]} /> */}
                </div>

                
            </div>
            <Footer/>
        </div>
    )
}
