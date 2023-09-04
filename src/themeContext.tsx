import React,{createContext,useState} from 'react'

interface data{
    text:'light'|'dark'
}
interface MoodContextType{
    mood:data;
    setMood:React.Dispatch<React.SetStateAction<data>>
}
interface MoodContextProviderProps{
    children:React.ReactNode
}

export const MoodContext=createContext<MoodContextType|null>(null)

const MoodContextProvider:React.FC<MoodContextProviderProps>=(props)=>{
    const [mood,setMood]=useState<data>({text:'light'})

    return(
        <MoodContext.Provider value={{mood,setMood}}>
            {props.children}
        </MoodContext.Provider>
    )
}

export default MoodContextProvider