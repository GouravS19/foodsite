import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ResMenu_URL } from '../utils/constants'
import Shimmer from './Shimmer'
import MenuSection from './MenuSection'

const CuponBox=({offer,cupon})=>{
    return (
        <div className='border flex min-w-[25%]'>
                    <img alt='cupon' src={require('../utils/images/dist.png')} className='size-12'/>
                    <div>
                        {offer}
                        <br/>
                        {cupon}
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
    console.log(data)
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
        <>
            {/* it is for the box part of the page */}
            <div>
                <h1>{data[0].card.card.text}</h1>
                <div className='flex items-center'>
                        <img src={require("../utils/images/star.png")} alt='logo' className='h-5 mr-2 sm:h-[1.2rem] inline'/>
                        <span>{data[2].card.card.info.avgRatingString}({data[2].card.card.info.totalRatingsString}) </span>
                        <div className='inline-block h-[.35rem] w-[.35rem] bg-gray-800 rounded-full
                        '></div>
                        <span>{data[2].card.card.info.costForTwoMessage}</span>
                </div>
                <div>{data[2].card.card.info.cuisines.join(", ")}</div>
                {/* <div>{data[2].card.card.info.nearestOutletNudge.nearestOutletInfo.siblingOutlet.sla.deliveryTime} mins</div> */}
                <hr/>
                <div>
                    Free delivery on orders above ₹199
                </div>
            </div>
            {/* for deals or cupon section */}
            <div className='flex justify-between'>
                <div>
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
            <div id='cupon_box' className='flex  overflow-scroll scroll-smooth'>
                {
                    data[3].card.card.gridElements.infoWithStyle.offers.map((ele,ind)=>{
                        return <CuponBox offer={ele.info.header} key={ind} cupon={ele.info.couponCode}/>
                    })
                }
            </div>
            {/* cupon part ends here  */}
            <div>
                Menu
            </div>
            <div>
                {
                    // data[data.length-1].groupedCard.cardGroupMap.REGULAR.cards.map((item,ind)=>{
                    //     if(ind==0){
                    //         return(<h1 key={ind}>hello</h1>)
                    //     }
                    //     return <MenuSection data={item} key={ind}/>
                    // })
                    data[data.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards.map(
                        (ele,ind)=>{
                            if(ind>0)
                            return(<MenuSection data={ele} key={ind} />)
                        }
                    )
                }
                {/* <MenuSection data={data[data.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards[1]} /> */}
            </div>

            
        </>
    )
}
