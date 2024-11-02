import Header from "@/components/Header";
import { Text } from "react-native";

function HomeScreen(props: any) {
    console.log(props)
    return (
        <>
            <Header {...props} />
        </>
    )
}

export default HomeScreen;