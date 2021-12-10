export default function TelaInicio ({nomeClasse, trocarTela}){

    return (
        <div  className={nomeClasse}>
            <img class="logo" src="assets/logo.png" alt="aaa"/>
            <button className="button-tela-inicio" onClick={trocarTela}>Praticar React</button>
        </div>
    );
}