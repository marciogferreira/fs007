import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Api from "../../config/Api";
import Message from "../../components/Message";
import LoadingScreen from '../../components/LoadingScreen'
function LoginPage() {

    const navigate = useNavigate();
    const { login, isLogged } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await Api.post('login', {
                email: email,
                senha: senha
            })
            Message.success(response.data.msg)
            login(response.data.token);
            navigate('/home');
        } catch(e) {
            console.error(e);
        } finally {
            setLoading(false)
        }     
    }

    if(isLogged) {
        return <Navigate to="/home" />
    }

    if(loading) {
        return <LoadingScreen />
    }

    return (
        <>
            <div className="container">
                <div className="col-md-4 offset-md-4">
                    <div className="mt-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="">Login</label>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="">Senha</label>
                                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} name="senha" className="form-control" />
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