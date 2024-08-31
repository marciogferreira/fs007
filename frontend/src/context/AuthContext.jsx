import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [isLogged, setIsLogged] = useState(localStorage.getItem('token@saletracker') ? true : false);

    function login(token) {
        localStorage.setItem('token@saletracker', token)
        setIsLogged(true);
    }

    function logout() {
        localStorage.removeItem('token@saletracker')
        setIsLogged(false);
    }

    return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;