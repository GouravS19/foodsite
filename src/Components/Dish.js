import React, { useRef } from 'react'
import { IMG_URL } from '../utils/constants'
import { useSelector } from 'react-redux'

export default function Dish() {
    const res=useSelector((store)=>{
        return store.slider
    })

    return (
        <div className=' relative my-3 ' >
                    
                    <div id="res_con" className='flex  overflow-scroll scroll-smooth' >
                        {
                            res.map(element => (<img src={IMG_URL+element.imageId} key={element.id} alt='kahan' className='sm:size-[13%] min-h-[8vh] min-w-[8vh] mr-[1.8%] sm:min-h-[13%] sm:min-w-[13%]'/>))
                        }
                    </div>
                    


                    
        </div>
    )
}
