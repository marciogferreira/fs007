import HomeScreen from "@/pages/HomeScreen";
import LoginScreen from "@/pages/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();

function MenuCustom(props: any) {
  console.log("Menu", props)
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default function PublicRoutes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true} >
        <Drawer.Navigator initialRouteName="Login" drawerContent={MenuCustom}>
          <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}
