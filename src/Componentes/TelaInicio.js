export default function TelaInicio ({nomeClasse, trocarTela}){

    return (
        <div  className={nomeClasse}>
            <img className="logo" src="assets/logo.png" alt="Logo"/>
            <button onClick={() => trocarTela("React")} data-identifier="start-zap-recall">
                Praticar React
                <img src="./assets/next.png" alt="avançar"/>
            </button>
            <button onClick={() => trocarTela("Javascript")} data-identifier="start-zap-recall">
                Praticar Javascript
                <img src="./assets/next.png" alt="avançar"/>
            </button>
        </div>
    );
}