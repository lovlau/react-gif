
import { useState } from "react"

export const AddCategory=({onValorNuevo})=>{

    const [inputValue, setInputValue] = useState('aña')

    const onInputChange=({target})=>{
        console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        onValorNuevo(inputValue)
        setInputValue("")
    }

return(


<form onSubmit={ onSubmit }>

    <input
        type="text"
        placeholder="Busca lo que buscas"
        value={inputValue}
        onChange={(event)=>onInputChange(event)}
    />


</form>

)
}