import React from 'react'
import EachListItem from './EachListItem'

const MenuSection=({data})=> {
    return (
        <div className='bg-red-200 border-4 m-3 border-black'>
            <div className='bg-orange-200'>
                {data.card.card.title}
            </div>
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
                        console.log('')
                    )
                )
            }
            {/* <EachListItem data={data.card.card.itemCards[0]}/> */}
        </div>
    )

}

export default MenuSection
