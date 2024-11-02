import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { Button, Text } from "react-native";

function LoginScreen() {

    const { setIsLogged }  = useContext(AuthContext)

    return (
        <>
            <Text>LoginScreen</Text>
            <Button onPress={() => setIsLogged(true)} title="Acessar" />
        </>
    )
}

export default LoginScreen;