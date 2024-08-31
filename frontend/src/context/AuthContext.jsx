import { createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);
    function login() {
        // Criar Token
        setIsLogged(true);
    }
    function logout() {
        // Apagar Token
        setIsLogged(false);
    }
    return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;