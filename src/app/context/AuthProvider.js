'use client'
import React , {createContext, useState} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    let [login , setLogin] = useState(false);
  return (
    <div>
      <AuthContext.Provider value={{login , setLogin}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
