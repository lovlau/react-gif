import {GifItem} from './GifItem'
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

    const {gifs, isLoading}=useFetchGifs(category)

    console.log({gifs, isLoading})

  return (
    <>
        <h3>{category}</h3>
        {
            isLoading&&(<h2>cargando...</h2>)
        }
        

        <div className="card-grid">
            {
                gifs.map((gifs)=>(
                    <GifItem
                    {...gifs}
                    />
                ))
            }
        </div>
    </>
  )
}