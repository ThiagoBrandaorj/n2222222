import LinkGenerico from "../components/Linkgenerico/Linkgenerico";

const Primeiro = () => {
    
    const dados  = [
        ["https://g1.globo.com/" , "G1"],
        ["https://vasco.com.br/", "Vasco"],
        ["https://botafogo.com.br/", "Botafogo"],
        ["https://github.com/ThiagoBrandaorj", "meu_Github"],
        ["https://pt.wikipedia.org/wiki/Lionel_Messi", "Messi"],
        ["https://www.gov.br/receitafederal/pt-br", "Receita_Federal"]
    ];

    const links = dados.map((ele) => (
        <LinkGenerico
           key = {ele[1]}
           texto= {ele[1]}
           endereco= {ele[0]}
         />
    ))
    
    
    
    return (<div>
             <h5>Mini titulo</h5>
             <p>Meu texto</p>
             {links}
            </div>);
}

export default Primeiro