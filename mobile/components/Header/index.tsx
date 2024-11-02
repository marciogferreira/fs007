import { Text, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import Entypo from '@expo/vector-icons/Entypo';
function Header (props: any) {

    function openMenu() {
        props.navigation.openDrawer()
    }

    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                <View>
                    <TouchableHighlight onPress={openMenu}>
                        <Entypo name="menu" size={34} color="white" />
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={styles.text}>Sales Tracker</Text>
                </View>
            </View>
        </View>
    )
}


export default Header;