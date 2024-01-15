import { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './gifGrid'

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(["One Punch"]);

    const OnAddCategory =(newCategorie)=>{
        if (categories.includes(newCategorie))return;

        setCategories([...categories,newCategorie])
        console.log(newCategorie)


    }
  return (
    
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onValorNuevo={(value)=>OnAddCategory(value)}
        />
        
            {
            categories.map((category)=>(
                    <GifGrid 
                    key={category}
                    category={category}
                    />
            ))
            }

    </>

  )
}
