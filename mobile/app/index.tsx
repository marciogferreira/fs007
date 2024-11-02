import HomeScreen from "@/pages/HomeScreen";
import LoginScreen from "@/pages/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true} >
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}
