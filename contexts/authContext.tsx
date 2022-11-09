import { createContext,useContext, useState, useEffect,  } from "react";
import {auth} from "../helpers/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile} from 'firebase/auth';

  


  const AutContext = createContext<any | undefined>( undefined);

export function useAut(){
    return useContext(AutContext)
}


export const AutProvider = ({children}: {children:React.ReactNode}) => {
    const [user, setUser] = useState<object | null>(null)
    const  [token, setToken ] = useState<string| null>(null)
    const [emailSent, setEmailSent] = useState<string>('')    
    function signUp(email:string,password:string){
            return createUserWithEmailAndPassword(auth, email, password)
        
       }

    function createUsername(name:string){
        if(auth.currentUser){
        return updateProfile(auth.currentUser, {displayName:name})
        }else{
            return "error"
        }
    }
    
   

    function signIn(email:string, password:string){
        return signInWithEmailAndPassword(auth, email, password)
    }


    function logOut(){
        return signOut(auth)
    }

    function passwordReset(email:string){
        return sendPasswordResetEmail(auth, email)
    }

    function waitForUser(cb:any){
        return onAuthStateChanged(auth, (user) => {
            cb(user)
        })
    }
    
    const value ={
        user,
        setToken,
        setUser,
        emailSent,
        setEmailSent,
        signUp,
        createUsername,
        signIn, 
        logOut,
       passwordReset,
       waitForUser
    }
  return (<AutContext.Provider value={value}>{children}</AutContext.Provider>)
    
    
  
}