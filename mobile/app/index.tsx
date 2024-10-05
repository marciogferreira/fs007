import HomeScreen from "@/pages/HomeScreen";
import LoginScreen from "@/pages/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
