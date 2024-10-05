import stylesTheme from "@/styles/ThemeDefault";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: stylesTheme.color_default,
        color: 'white',
        padding: 20
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default styles;