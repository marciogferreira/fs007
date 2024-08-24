import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Produtos from '../pages/Produtos';
import ProdutosForm from '../pages/Produtos/ProdutosForm';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
function RoutePrivate({ children }) {
    const { isLogged } = useContext(AuthContext);

    if(isLogged === false) {
        // Redireciona para a /
        return <Navigate to={'/'} />
    }

    return (
        <>
            {children}
        </>
    )
}

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<RoutePrivate><HomePage /></RoutePrivate>} />
                    
                    <Route path="/produtos" element={<RoutePrivate><Produtos /></RoutePrivate>} />
                    <Route path="/produtos/novo" element={<ProdutosForm />} />
                    <Route path="/produtos/editar/:id" element={<ProdutosForm />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;