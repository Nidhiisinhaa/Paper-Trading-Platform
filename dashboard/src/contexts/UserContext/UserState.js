import UserContext from "./UserContext";
import { useContext, useState } from "react";
import { initialUserState } from "../DummyData";
function UserState({children}) {
    let [user, setUser] = useState(initialUserState);

    let editUserInfo= (userData)=>{
        setUser(prev=>{
            return {...prev, ...userData }
        })
    }
    return ( <>
    
    {console.log(user)}
    <UserContext.Provider value={{user, setUser, editUserInfo}}>
        {children}
    </UserContext.Provider>
    </> );
}

export default UserState;