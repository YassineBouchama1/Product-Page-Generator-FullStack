"use client";
import { useAppDispatch } from "@/stores/hooks"



const useGetFiles = ()=>{

const dispatch = useAppDispatch()

    const onPressPaginate = async (event) => {
        console.log(event.selected + 1)

        await dispatch(getAllOrdersRedux(event.selected + 1))

    }

    
}

