
import { AuthProvider } from "./context/AuthContext"
import AppRoutes from "./routes/AppRoutes"
// https://dontpad.com/fs007
function App() {
  
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
