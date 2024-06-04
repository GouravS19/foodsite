import { useEffect } from "react"
import { MENU_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSliceRes } from "../utils/slideSlice";

export const useResData=()=>{
    
    const dispatch=useDispatch()

    useEffect(()=>{
        fetchResInfo();
    },[])

    const fetchResInfo=()=>{
        fetch(MENU_URL)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            // console.log(res)
            return res.data.cards[0].card
            // dispatch(addSliceRes(.imageGridCards.info))
        })
        .then((res)=>{
            // console.log(res)
            // dispatch(addSliceRes(res.card.imageGridCards.info))
            //if api works then disptach this to store the slider data
        })
    }
}