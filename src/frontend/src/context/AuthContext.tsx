import { createContext, ReactNode, useContext, useState } from "react"
import { authenticateUser } from "../utilities/authenticateUser";
export function useAuth() {
    return useContext(AuthContext);
}

type AuthProviderProps = {
    children: ReactNode
}

type AuthContext = {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}
const AuthContext = createContext({} as AuthContext)

export function AuthProvider( { children }: AuthProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = async () => {
        // Perform token verification here
        const isValidToken = await authenticateUser();
    
        console.log(isValidToken)
        
        if (isValidToken) {
          setIsLoggedIn(true);
        } else {
          // Handle invalid token, maybe redirect or show an error message
        }
      };
    
      const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}