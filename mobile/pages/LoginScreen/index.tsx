import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { Button, StyleSheet, Text } from "react-native";

function LoginScreen() {

    const { setIsLogged }  = useContext(AuthContext)

    async function logar() {
        // Se Conecta com o A API 
        // Verifica se o Login e Senha estao corretos
        // SE TIVER OK
        setIsLogged(true)

        // SE NAO
        // setIsLogged(false)
    }

    return (
        <>
            <Text>LoginScreen</Text>
            <Text>Campo Login</Text>
            <Text>Campo Senha</Text>
            <Button 
                color={'blue'}
                onPress={() => logar()} 
                title="Acessar" 
            />
        </>
    )
}


export default LoginScreen;