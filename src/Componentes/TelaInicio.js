export default function TelaInicio ({nomeClasse, trocarTela}){

    return (
        <div  className={nomeClasse}>
            <img className="logo" src="assets/logo.png" alt="Logo"/>
            <button className="button-style-inicio" onClick={() => trocarTela("react")} data-identifier="start-zap-recall">
                Praticar React
                <img src="./assets/next.png" alt="avançar"/>
            </button>
            <button className="button-style-inicio" onClick={() => trocarTela("javascript")} data-identifier="start-zap-recall">
                Praticar Javascript
                <img src="./assets/next.png" alt="avançar"/>
            </button>
        </div>
    );
}