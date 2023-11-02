import { useState } from "react";
import Cartao from "../../components/Cartao/Cartao.jsx";
import { ContainerListagem, TituloListagem } from "./style";

const predados = [
    {
        'titulo': 'ananais',
        'letra': 'z'
    },
    {
        'titulo': 'banana',
        'letra': 'w'
    },
    {
        'titulo': 'cenoura',
        'letra': 'y'
    },
    {
        'titulo': 'casa',
        'letra': 'a'
    },
    {
        'titulo': 'felpudo',
        'letra': 'k'
    }
]

const Listagem = () => {
    const [dados, setDados] = useState(predados);

    const filtar = (entrada) => {
        const resposta = predados.filter(
            (e) => {
                const titulo = e.titulo.toLowerCase().includes(entrada)
                const letra = e.letra.toLowerCase().includes(entrada)
                return titulo || letra;
            }
        )
        setDados(resposta);
    }

    return(
    <>
    <TituloListagem>Listagem</TituloListagem>
    <input 
       type="text"
       onChange={(e) => filtar(e.target.value)}
       />
    <ContainerListagem>
        {dados.map(
    (el, i) => (
        <Cartao
            key={i}
            titulo={el.titulo}
            letra={el.letra}
        />
    )
)}
    </ContainerListagem>
    </>
);
}

export default Listagem;