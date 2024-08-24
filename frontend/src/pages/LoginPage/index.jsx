import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
function LoginPage() {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext)

    function handleSubmit() {
        // Fazer a requisição para o backend para validar os dados de login
        // e redirecionar para a página Home
        console.log('Login efetuado com sucesso!');
        login();// Chamada do AuthContext
        navigate('/home');
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