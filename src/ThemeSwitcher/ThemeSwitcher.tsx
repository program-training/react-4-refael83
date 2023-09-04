import React, { useContext } from 'react';
import { MoodContext } from '../themeContext';

const ThemeSwitcher:React.FC=()=>{
    const context=useContext(MoodContext)
    if(!context) return null

    function clickChange():void{
        context?.mood.text==='light'?context?.setMood({text:'dark'}):context?.setMood({text:'light'})
        console.log(context?.mood.text);
        
    }

    return(
        <div>
          <button onClick={clickChange}>change here</button>  
        </div>
    )
}

export default ThemeSwitcher