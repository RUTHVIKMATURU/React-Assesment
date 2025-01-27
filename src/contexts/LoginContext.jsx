import {createContext,useState } from "react";
export const logincontextobj=createContext();

import React from 'react'

function LoginContext({children}) {
  const [currentUser,setcurrentUser]=useState(null);
  const [loginstatus,setloginstatus]=useState(false);
  const [loginerror,setloginerror]=useState(null);



  function onuserlogin({username,password}){
    fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
    .then(res=>res.json())
    .then(usersobj=>{
      if(usersobj.length===0){
        setloginerror({message:'Username or password is incorrect'})
      }else{
        console.log(usersobj[0]);
        setcurrentUser(usersobj[0]);
        setloginstatus(true);
        setloginerror(null);
      }
    })
    .catch(err=>{
      setloginerror(err);
    })
  }
  function onuserlogout(){
    setcurrentuser(null);
    setloginerror(null);
    setloginstatus(false);
  }
  return (
    <div>
      <logincontextobj.Provider value={{currentUser,setcurrentUser,loginstatus,setloginstatus,loginerror,onuserlogin,onuserlogout}}>
        {children}
      </logincontextobj.Provider>
    </div>
  )
}

export default LoginContext