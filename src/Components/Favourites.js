import React from 'react'
import empty from "../utils/images/plate.avif"
import NoDataPage from './NoDataPage'
export default function Favourites() {
    const data={
        firstText:"Page not found",
        secondText:"Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh",
        thirdText:"Go Home"
    }
    const img=empty
    return (
        <NoDataPage textData={data} image={img}/>
    )
}
