
import React,{ useContext } from 'react'
import { TextContext } from '../textContext'

 const Child:React.FC=()=>{
    const context=useContext(TextContext)
    if(!context)return null
    return(
        <div>
            <h3>{context.title.text}</h3>
        </div>
    )
}
export default Child