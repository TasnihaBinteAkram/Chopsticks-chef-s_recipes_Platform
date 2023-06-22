import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title}- chopSticks`
    },[title])
}

export default useTitle