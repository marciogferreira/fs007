import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProdutosForm() {

    const params = useParams();
    // https://dontpad.com/fs007
    const[dados, setDados] = useState({
        nome: '',
        valor: '',
    })
    function handleChange(event) {
        const { name, value } = event.target;
        let dadosForm = dados;
        if(name === 'nome') {
            dadosForm.nome = value;
        }
        if(name === 'valor') {
            dadosForm.valor = value;
        }
        setDados({...dadosForm});
    }
    async function saveProdutos() {

        if(dados.nome === '' || dados.preco === '') {
            alert("Todos os campos são obrigatórios!")
            return;
        }
        
        if(params.id) {
            await fetch(`http://localhost:3000/produtos/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert("Produto atualizado com sucesso!")
        } else {
            await fetch('http://localhost:3000/produtos', {
                method: 'POST',
                body: JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert("Produto salvo com sucesso!")
        }
        
       
    }

    async function getData() {
        const response = await fetch(`http://localhost:3000/produtos/${params.id}`, {
            method: 'GET',
        })
        const data = await response.json();
        setDados(data)
    }

    useEffect(() => {
        if(params.id) {
            getData();
        }
    }, []);

    return (
        <>
            <Link to="/produtos">Lista de Produtos</Link>
            <form>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    name="nome"
                    value={dados.nome}
                    onChange={handleChange} />
                <br />
    
                <input 
                    type="text" 
                    placeholder="Valor" 
                    name="valor" 
                    value={dados.valor}
                    onChange={handleChange}/>
                <br />
                <button type="button" onClick={saveProdutos}>Salvar</button>
            </form>
        </>
    )
}

export default ProdutosForm;