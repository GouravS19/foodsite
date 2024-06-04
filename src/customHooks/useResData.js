import { useEffect } from "react"
import { MENU_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSliceRes } from "../utils/slideSlice";
import { addRes } from "../utils/topResSlice";
import { addNormalRes } from "../utils/normalResSlice";

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
            // dispatch(addSliceRes(res.data.cards[0].card.card.imageGridCards.info))
            //dispatching for top res
            // dispatch(addRes(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants))
            // dispatch(addNormalRes(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants))
        })
        
    }
}