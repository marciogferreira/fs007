import HomeScreen from "@/pages/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const Drawer = createDrawerNavigator();

function MenuCustom(props: any) {

  const { setIsLogged } = useContext(AuthContext);

  console.log("Menu", props)
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => setIsLogged(false)} />
    </DrawerContentScrollView>
  )
}

export default function PrivateRoutes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true} >
        <Drawer.Navigator initialRouteName="Home" drawerContent={MenuCustom}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}
