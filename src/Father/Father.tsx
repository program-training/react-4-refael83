import React, { useContext,useState } from 'react';
import { TextContext } from '../textContext';
import Child from '../Child/Child';

const Father:React.FC=()=> {
    const context=useContext(TextContext)
    if(!context) return null
    const {title}=context
    const {text}=title
    const [str,setStr]=useState<string>(text)
    function changeTitle(e: React.FormEvent<HTMLInputElement>):void{
        setStr(e.currentTarget.value)
    }
    function clickChange():void{
        context?.setTitle({text:str})
    }

    return(
        <div>
            <input onChange={changeTitle}></input>
            <button onClick={clickChange}>change here</button>
            <Child/>
        </div>
    )
}
export default Father