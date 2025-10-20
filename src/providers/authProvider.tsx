import { useMemo, useState, type JSX } from 'react'
import { authContext } from '../contexts/authContext'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';

export const AuthProvider = ({children}:{children:JSX.Element}) => {
   const [isAuth, setIsAuth] = useState(true)
   onAuthStateChanged(auth, (user) => {
      if (user) {
            setIsAuth(true)
      } else {
         //
      }
   });

   const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);
  return (
     <authContext.Provider value={value}>{children}</authContext.Provider>
  )
}
