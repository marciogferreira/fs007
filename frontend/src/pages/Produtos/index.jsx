import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutDefault from "../../layouts/LayoutDefault";

function Produtos() {

    const[lista, setLista] = useState([]);

    async function getProdutos() {
        const response = await fetch('http://localhost:3000/produtos', {
            method: 'GET'
        });
        const data = await response.json();
        setLista(data);
    }


    async function deleteProdutos(id) {
        const check = confirm("Você deseja deletar este produto?");
        if(check) {
            await fetch(`http://localhost:3000/produtos/${id}`, {
                method: 'DELETE'
            });
            getProdutos();
        }
    }
    
    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <LayoutDefault>
            <div className="row">
                <div className="col-10">
                    <h3>Produtos</h3>        
                </div>
                <div className="col-2">
                    <Link to="/produtos/novo" className="btn btn-primary btn-sm">Novo Produto</Link>        
                </div>
            </div>            

            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Cód</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, indice) => (
                        <tr key={indice}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.valor}</td>
                            <td>
                                <Link to={`/produtos/editar/${item.id}`}>
                                    Editar
                                </Link> |
                                <button onClick={() => deleteProdutos(item.id)}>
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            Há {lista.length} registros cadastrado
            <br />
            
        </LayoutDefault>
    )
}

export default Produtos;