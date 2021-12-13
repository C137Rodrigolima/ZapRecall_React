import { useState } from "react";

export default function TelaInicio ({nomeClasse, trocarTela, limparInput}){
    const [numeroZaps, setNumeroZaps] = useState();

    return (
        <div  className={nomeClasse}>
            <img className="logo" src="assets/logo.png" alt="Logo"/>

            <input placeholder="Sua meta de zaps" value={numeroZaps} onChange={e => setNumeroZaps(e.target.value)}/>

            <button onClick={() => trocarTela("React", numeroZaps)} data-identifier="start-zap-recall">
                Praticar React
                <img src="./assets/next.png" alt="avançar"/>
            </button>
            <button onClick={() => trocarTela("Javascript", numeroZaps)} data-identifier="start-zap-recall">
                Praticar Javascript
                <img src="./assets/next.png" alt="avançar"/>
            </button>
        </div>
    );
}