import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { checkAuth } from "../lib/checkAuth";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
    user: unknown;
    setUser: React.Dispatch<React.SetStateAction<null>>;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(()=>{
        checkAuth(setUser, navigate)
    }, [])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}