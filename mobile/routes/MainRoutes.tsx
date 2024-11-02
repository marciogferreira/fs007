import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Text } from "react-native";

export default function MainRoutes() {
  const {isLogged } = useContext(AuthContext)
  return (
    <>
        {isLogged ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}
