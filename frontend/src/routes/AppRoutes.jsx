import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Produtos from '../pages/Produtos';
import ProdutosForm from '../pages/Produtos/ProdutosForm';
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/produtos/novo" element={<ProdutosForm />} />
                    <Route path="/produtos/editar/:id" element={<ProdutosForm />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;