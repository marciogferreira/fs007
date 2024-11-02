import { createContext, useState } from "react";

type DataProps = {
    isLogged: boolean,
    setIsLogged: (value: boolean) => void,
}

export const AuthContext = createContext({} as DataProps);

export default function AuthProvider({ children }: any) {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </AuthContext.Provider>
    )
}

