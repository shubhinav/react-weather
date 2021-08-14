import { useEffect, useState } from "react"
import "./Loader.css"

export default function Loader(){
    const [maxTimeReached, setMaxTimeReached] = useState(false)

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setMaxTimeReached(true)
        },8000)

        return function cleanup(){
            clearTimeout(timer)
        }
    })

    return(
        <>
            {maxTimeReached ? <h3 style={{marginTop: "20px"}}>Maximum response time reached. Please try again.</h3> : <div className="loader"></div>}
        </>
    )
}