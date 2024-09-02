import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Api from "../../config/Api";

function LoginPage() {

    const navigate = useNavigate();
    const { login, isLogged } = useContext(AuthContext)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await Api.post('login', {
            email: 'admin@admin.com',
            senha: '123123'
        })
        if(response.data.token) {
            login(response.data.token);// Chamada do AuthContext
            navigate('/home');
        } else {
            alert('Login ou senha inválidos.')
        }
        // Fazer a requisição para o backend para validar os dados de login
        // e redirecionar para a página Home
        // console.log('Login efetuado com sucesso!');
        
    }

    if(isLogged) {
        return <Navigate to="/home" />
    }

    return (
        <>
            <div className="container">
                <div className="col-md-4 offset-md-4">
                    <div className="mt-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="">Login</label>
                                <input type="text" name="login" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Senha</label>
                                <input type="text" name="login" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="submit" value="Acessar" className="btn btn-primary btn-sm" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default LoginPage;