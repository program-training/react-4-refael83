import React,{useContext,useState} from "react";
import { MoodContext } from "../themeContext";

const BackgroundSwitcher:React.FC=()=>{
    const context=useContext(MoodContext)
    if(!context)return null
    console.log(context?.mood.text);
    
    
    // const[color,setColor]=useState<'black'|'white'>('black')
    //context?.mood.text==='light'?setColor('white'):setColor('black')
    //const[colorText,setColorText]=useState<'black'|'white'>('white')
    //context?.mood.text==='light'?setColorText('black'):setColorText('white')
    const backgroundColor = context.mood.text === 'light' ? 'white' : 'black';
     const textColor = context.mood.text === 'light' ? 'black' : 'white';

    return(
        <div style={{backgroundColor}} >
            <h1 style={{color:textColor}}>HI THERE</h1>
            <p style={{color:textColor}}>how are you?</p>
        </div>
    )
}
export default BackgroundSwitcher