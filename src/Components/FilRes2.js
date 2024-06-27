import React from 'react'
import ResCard from './ResCard'

export default function FilRes2({resData}) {
    if(resData==null){
        return <br/>
    }
    else if(resData.length==0) {
        return (<h1>There is no restaurnat</h1>)
    }
    return (
        // <div className='flex items-center justify-center bg-slate-500'>
        <div className='  flex flex-wrap justify-start sm:justify-center items-center'>
            {resData.map((res)=>{
                return <ResCard resData={res} key={res.info.id}/>
            })}
        </div>
        // </div>
    )
}
