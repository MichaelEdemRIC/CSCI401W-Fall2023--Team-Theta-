import { createContext, ReactNode, useContext, useState } from "react"
import { authenticateUser } from "../utilities/authenticateUser";
import { authenticateAdmin } from "../utilities/authenticateAdmin";
export function useAuth() {
    return useContext(AuthContext);
}

type AuthProviderProps = {
    children: ReactNode
}

type AuthContext = {
    isLoggedIn: boolean
    isAdmin: boolean
    login: () => void
    logout: () => void
}
const AuthContext = createContext({} as AuthContext)

export function AuthProvider( { children }: AuthProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const login = async () => {
        // Perform token verification here
        const isValidToken = await authenticateUser();
    
        console.log(isValidToken)
        
        if (isValidToken) {
          setIsLoggedIn(true);
          const isValidAdmin = await authenticateAdmin();
          if(isValidAdmin) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } else {
            setIsLoggedIn(false);
            setIsAdmin(false);
        }
      };
    
      const logout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
      }

    return (
        <AuthContext.Provider value={{
            isAdmin,
            isLoggedIn,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}