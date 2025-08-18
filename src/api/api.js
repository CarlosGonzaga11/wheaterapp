import {useEffect, useState} from "react"


export default function CallApi(){
    const [data,setData] = useState();
    const api_url = "http://api.weatherapi.com/v1/current.json"
    useEffect(()=>{
        async function fetchData() {
            const response = await fetch(`${api_url}?key=${import.meta.env.VITE_API_KEY}&q=São Paulo`);
            console.log(response)
            const result = response.json()
            
        }
        fetchData()
    })
    return(
        <>
        </>
    )
}