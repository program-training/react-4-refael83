import React from 'react'
import TextContextProvider from '../textContext'
import Father from '../Father/Father'

const Grandpa:React.FC=()=>{
    return(
        <div>
            <TextContextProvider>
                <Father/>
            </TextContextProvider>
        </div>
    )

}
export default Grandpa