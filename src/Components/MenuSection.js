import React, { useEffect } from 'react'
import EachListItem from './EachListItem'
import { useRef } from 'react'

const MenuSection=({data,show})=> {
    const myRef=useRef(null)
    const myRefArrow=useRef(null)
    function doToggle(){
        // div.current.cala.add('z')
        
        Array.from(myRef.current.classList).includes('hidden')?myRef.current.classList.remove('hidden'):myRef.current.classList.add('hidden')
        // div.current.className=
        // console.log(Array.from(myRef.current.classList).includes('hidden'))

        //for image rotation 
        // myRefArrow.current.classList.add('rotate-180')

        Array.from(myRefArrow.current.classList).includes('rotate-180')?myRefArrow.current.classList.remove('rotate-180'):myRefArrow.current.classList.add('rotate-180')
    }
    useEffect(()=>{
        if(show==false){
            myRefArrow.current.classList.add('rotate-180')
        }
    },[])
    
    return (
        <div className='bg-[#f2f2f2] pt-2 sm:pt-4'>
            <div className='bg-white cursor-pointer flex justify-between px-5 py-5 items-center' onClick={doToggle} >
                <div className='font-bold text-[1.07rem] sm:text-base text-sm text-[#535665]'>
                    {data.card.card.title}
                    <span>
                        {
                            data.card.card.itemCards?(
                                ' ('+data.card.card.itemCards.length+')'
                            ):("")
                        }
                    </span>
                </div>
                <div>
                    <img ref={myRefArrow} src={require("../utils/images/arrow.png")} alt='arrow' className='size-4' />
                    {/* <button className='border bg-blue-200 p-3' onClick={doToggle}>
                        click it 
                    </button> */}
                </div>
            </div>
            <div className={(show)?'':'hidden'} ref={myRef}>
                {
                    data.card.card.itemCards?(
                        data.card.card.itemCards.map((item,ind)=>{
                            return <EachListItem data={item} key={ind}/>
                        })
                    ):(
                        data.card.card.categories?(
                            data.card.card.categories.map((ele)=>{
                                return (ele.itemCards.map((item,ind)=>{
                                    return <EachListItem data={item} key={ind}/>
                                }))
                                // return <EachListItem data={ele[0]}/>

                            })
                            // data.card.card.categories[0].itemCards.map((item)=>{
                            //         return <EachListItem data={item}/>
                            // })
                        ):(
                            null
                        )
                    )
                }
                {/* <EachListItem data={data.card.card.itemCards[0]}/> */}
            </div>
            
        </div>
    )

}

export default MenuSection
