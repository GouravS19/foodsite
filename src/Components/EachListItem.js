import React from 'react'
import { Res_Item_img_url } from '../utils/constants'

function EachListItem({data}) {
    const {name,defaultPrice,description,imageId}=data.card.info
    return (
        <div className='border-2'>
            <div>
                <h1>{name}</h1>
                <div className='flex '>
                    <span>₹{isNaN(defaultPrice/100)?"199":defaultPrice/100}</span>
                    <div>
                        <img alt='discount' src={require("../utils/images/tag.png")} className='size-6 inline'/>
                        20% OFF USE SWIGGYIT
                    </div>
                </div>
                <div>
                    {description}
                </div>
            </div>
            {/* each image and add button */}
            <div>
                <img src={Res_Item_img_url+imageId} alt='foodImage' className='size-32'/>
                <button>
                    ADD
                </button>
            </div>
        </div>
    )
}

export default EachListItem