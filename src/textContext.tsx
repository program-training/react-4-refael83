import React,{createContext,useState} from "react";

interface data{
    text:string
}

interface TextContextType{
    title:data;
    setTitle:React.Dispatch<React.SetStateAction<data>>
}
interface TextContextProviderProps{
    children:React.ReactNode
}

export const TextContext=createContext<TextContextType|null>(null);


const TextContextProvider: React.FC<TextContextProviderProps> = (props) => {
    const [title,setTitle]=useState<data>({text:'hello world'})

    return(
        <TextContext.Provider value={{title,setTitle}}>
          {props.children}
         </TextContext.Provider>
    )
}

export default TextContextProvider
