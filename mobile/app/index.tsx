import AuthProvider from "@/contexts/AuthContext";
import MainRoutes from "@/routes/MainRoutes";
import { Text, View } from "react-native";


export default function Index() {

  
  return (
    <View style={{ flex: 1 }}>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </View>
  );
}
