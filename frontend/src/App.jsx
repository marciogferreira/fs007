import { useState } from "react"
import AuthContext from "./context/AuthContext"
import AppRoutes from "./routes/AppRoutes"
function App() {
  const [isLogged, setIsLogged] = useState(false);
  function login() {
    // Criar Token
    setIsLogged(true);
  }
  function logout() {
    // Apagar Token
    setIsLogged(false);
  }
  return (
    <>
      <AuthContext.Provider value={{ isLogged, login, logout }}>
        <AppRoutes />
      </AuthContext.Provider>
    </>
  )
}

export default App
