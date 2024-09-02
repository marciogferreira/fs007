import { useState, useEffect } from "react";

function HomePage() {

    const nome = 'Marcio';
    const[sobrenome, setSobrenome] = useState('Ferreira')
    const[campo, setCampo] = useState('');
    const[lista, setLista] = useState([]); // array

    function mostrarResultado() {
        const listaAtualizada = lista;
        listaAtualizada.push(campo)
        setLista([...listaAtualizada]);
        setCampo('')
    }


    useEffect(() => {
        if(campo === 'Wagner') {
            alert("SOu DEv")
        }
    }, [campo]);

    function carregarDadosDaAPi() {
        console.log("CarregarDados");
    }    
    
    useEffect(() => {
        carregarDadosDaAPi();
        console.log("Executou 1 Vez.")
    }, []);

    return (
        <>
            Página Inicial - Calculadora
            <br />
            {nome} {sobrenome}
            <br />
            {campo}
            <br />
            <input type="text" value={campo} onChange={(e) => setCampo(e.target.value)} />
            <br />
            <button onClick={mostrarResultado}>Resultado</button>
            <br />
            <ul>
            {lista.map((texto, indice) => (
                <li key={indice}>{texto}</li>
            ))}
            </ul>
        </>
    )
}

export default HomePage;