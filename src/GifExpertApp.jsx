import React from 'react';
import { useState } from 'react'
import { GifGrid } from './GifGrid';
import { AddCategory} from './AddCategory'

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
