import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <>
            <h1>Produtos</h1>
            Há {lista.length} registros cadastrado
            <br />
            <Link to="/produtos/novo">Novo Produto</Link>

            <table>
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
            
        </>
    )
}

export default Produtos;