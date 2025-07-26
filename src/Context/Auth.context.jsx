import { createContext, useState } from "react";

export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem("token") || sessionStorage.getItem("token") || null);
    
    return (
        <AuthContext.Provider value={{ token, setToken }}>
             {children}
        </AuthContext.Provider>
    );



}