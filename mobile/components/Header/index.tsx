import { Text, View } from "react-native";
import styles from "./styles";
import Entypo from '@expo/vector-icons/Entypo';
function Header () {
    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                <View>
                    <Entypo name="menu" size={50} color="white" />
                </View>
                <View>
                    <Text style={styles.text}>Sales Tracker</Text>
                </View>
            </View>
        </View>
    )
}


export default Header;