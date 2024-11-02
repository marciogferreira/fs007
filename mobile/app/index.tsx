import AuthProvider from "@/contexts/AuthContext";
import MainRoutes from "@/routes/MainRoutes";
import { SafeAreaView, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <AuthProvider>
          <MainRoutes />
        </AuthProvider>
      </SafeAreaView>
    </View>
  );
}
