import React from 'react'
import EachListItem from './EachListItem'
import { useRef } from 'react'

const MenuSection=({data,show})=> {
    const myRef=useRef(null)
    function doToggle(){
        // div.current.cala.add('z')
        
        Array.from(myRef.current.classList).includes('hidden')?myRef.current.classList.remove('hidden'):myRef.current.classList.add('hidden')
        // div.current.className=
        // console.log(Array.from(myRef.current.classList).includes('hidden'))
    }
    return (
        <div className='bg-red-200 border-4 m-3 border-black'>
            <div className='bg-orange-200'>
                <div>{data.card.card.title}</div>
                <div>
                    <button className='border bg-blue-200 p-3' onClick={doToggle}>
                        click it mother fucker
                    </button>
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
