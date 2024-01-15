import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {


      const [gifs, setgifs] = useState(["hola"])
     const [isLoading, setisLoading]=useState(true)

    const getImagen=async()=>{
     const newgif=await(getGifs(category))
     setgifs(newgif)
     setisLoading(false)
     }

     useEffect(()=>{
         getImagen();
     },[]);

  return {
    gifs,
    isLoading,

  }}
