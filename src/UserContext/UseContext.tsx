import React,{createContext,useState,useEffect} from "react";

interface data {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipCode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }


interface UserContextType{
    user:data;
    setTitle:React.Dispatch<React.SetStateAction<data>>
}
interface UserContextProviderProps{
    children:React.ReactNode
}

export const UserContext=createContext<UserContextType|null>(null);


const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const [user,setUser]=useState<data>()
    useEffect(()=>{
        const fetchItem = async () => {
            let num=Math.floor((Math.random()*15)+1)
            let response=await fetch(`https://jsonplaceholder.typicode.com/users?id=${num}`)
            let result = await response.json()
            if(!response.ok){
                throw new Error(response.statusText)
              }

        setUser(result)
    }
    fetchItem()
},[])
    

    return(
        <UserContext.Provider value={{user,setUser}}>
          {props.children}
         </UserContext.Provider>
    )
}

export default TextContextProvider