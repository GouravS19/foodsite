import React from 'react'
import ResCard from './ResCard'

export default function FilRes2({resData}) {
    return (
        <div className=' flex-col flex sm:flex-row flex-wrap justify-center'>
            {resData.map((res)=>{
                return <ResCard resData={res}/>
            })}
        </div>
    )
}
