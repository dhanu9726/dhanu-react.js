import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { IsAuthcontext } from '../context/Auth';

const Privacypage = ({children}) => {
    const {isAuth}=useContext(IsAuthcontext)
    const Auth=isAuth.Islogin
    if(!Auth){
        return <Navigate to={"/Login"}/>
        
    }
    alert("Now you can able to see product Page")

  return children
      
  
}

export default Privacypage
