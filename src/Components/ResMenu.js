import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ResMenu_URL } from '../utils/constants'
import Shimmer from './Shimmer'
import MenuSection from './MenuSection'
import generic from "../utils/images/generic.avif"
import delivery from "../utils/images/deli.avif"
import oneLite from "../utils/images/oneLite.avif"
import Footer from './Footer'
import CartPopUp from './CartPopUp'

const CuponBox=({offer,cupon})=>{
    return (
        <div className='border border-[#dadae0] flex items-center  pl-4 py-2  sm:py-3 min-w-[70%] sm:min-w-[43%]  rounded-3xl mr-7 sm:mr-10 my-4 sm:my-6'>
                    {/* <img alt='cupon' src={require('../utils/images/dist.png')} className='size-12'/> */}
                    <img alt='cupon' src={generic} className='size-8 sm:size-12 sm:mr-[4%] mr-2'/>
                    <div>
                        <span className='font-bold sm:text-base text-sm'>{offer}</span>
                        <br/>
                        <span className='text-xs sm:text-sm font-semibold text-[#616161]'>{cupon?cupon:"USE SWIGGY"}</span>
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
            <div className='mx-[4.5%] sm:mx-[23%] mt-[5%] text-[#abaeb0]'>
                {/* it is for the box part of the page */}
                <div>
                    <h1 className='sm:text-[1.75rem] text-xl font-bold text-[#3f3f3f] pl-4 sm:pl-0'>{data[0].card.card.text}</h1>
                    <div className='sm:border-[17px] border-[10px]  borderIt mb-5 sm:mb-8 sm:mt-2 mt-1'>
                        <div className='border-[1.5px] sm:border-2 rounded-t-xl pt-3 sm:pt-5'>
                            <div className='flex items-center pl-[3%] font-bold sm:text-lg text-sm'>
                                    <img src={require("../utils/images/star.png")} alt='logo' className='h-4 mr-2 sm:h-[1.2rem] inline'/>
                                    <span>{data[2].card.card.info.avgRatingString} ({data[2].card.card.info.totalRatingsString})  </span>
                                    <div className='inline-block h-[.35rem] w-[.35rem] bg-[#919197] rounded-full mx-3 '></div>
                                    <span>{data[2].card.card.info.costForTwoMessage}</span>
                            </div>
                            <div className='pl-[3%] mt-2 sm:mt-[.7%]  font-bold text-[#f25900] text-xs sm:text-sm '>{data[2].card.card.info.cuisines.join(", ")}</div>
                            <div className='pl-[3%] sm:pt-3 pt-2'>
                                <span className='font-bold text-sm mr-2'>Outlet </span> <span className='font-light text-sm sm:text-base text-[#745656]'>{data[2].card.card.info.locality}</span>
                            </div>
                            <div className='font-bold text-sm pl-[3%] pt-2 sm:pb-4 pb-2'><span className='sm:text-base  text-sm'>35-40</span> min</div>

                            
                            {/* <div>{data[2].card.card.info.nearestOutletNudge.nearestOutletInfo.siblingOutlet.sla.deliveryTime} mins</div> */}
                            <hr/>
                            <div className='pl-[3%] sm:py-3 py-2 text-[#616161] text-xs sm:text-sm'>
                                <img alt='del' src={delivery} className='inline size-5 sm:size-6 mr-3'/>Order above 149 for discounted delivery fee
                            </div>
                            <hr/>
                            <div className='pl-[3%] py-2 sm:py-3 text-xs  sm:text-sm font-bold  text-[#f25900] oneLite' >
                                <img alt='del' src={oneLite} className='inline w-10 sm:w-12 h-3 sm:h-5 mr-3'/>Free delivery on orders above ₹199
                            </div>
                        </div>
                    </div>
                </div>
                {/* for deals or cupon section */}
                <div className='flex justify-between'>
                    <div className='sm:text-xl text-base font-bold text-[#535665]'>
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
                <div className='flex justify-center text-lg font-bold sm:text-xl mt-2 mb-4 sm:my-5  text-[#414448]'>
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
                {/* it it for the cart pop up  */}
                <CartPopUp/>
                
                
            </div>
            <Footer/>
        </div>
    )
}
