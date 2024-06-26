import React from 'react'
import EachListItem from './EachListItem'

const MenuSection=({data})=> {
    return (
        <div>
            <div className='bg-orange-200'>
                {data.card.card.title}
            </div>
            {/* {
                data.card.card.itemCards.map((item)=>{
                    return <EachListItem data={item}/>
                })
            } */}
            <EachListItem data={data.card.card.itemCards[0]}/>
        </div>
    )

}

export default MenuSection
