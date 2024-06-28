import { useContext } from "react";
import { createContext, useState } from "react";

type AuthContextType = {
    user: unknown;
    setUser: React.Dispatch<React.SetStateAction<null>>;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState(null);

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