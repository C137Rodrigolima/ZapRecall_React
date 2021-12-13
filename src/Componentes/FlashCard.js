import {useState}  from "react";
import BottomFrontCard from "./BottomFrontCard";
import BottomBackCard from "./BottomBackCard";
import BottomNextCard from "./BottomNextCard";
import TelaFinal from "./TelaFinal";

let respostasComZap = 0;
let indice = 0;

export default function FlashCard({deckEscolhido, tituloDeck, zaps, retornarTelaInicial}){
    const [valor, setValor] = useState(true);
    const [borda, setBorda] = useState("");
    const [nextValor, setNextValor] = useState(true);
    const [nextScreen, setNextScreen] = useState(true);

    function virarCard(){
        setValor(false);
    }
    function escolherResposta(parametro){
        setBorda(parametro);
        parametro === "borda-amarela" && respostasComZap++;
        setNextValor(false);
    }
    function nextCard(){
        setValor(true);
        setBorda("");
        if((deckEscolhido.length - 1) !== indice){
            indice++;
        } else{
            setNextScreen(false);
            indice = 0;
        }
        setNextValor(true);
    }
    function reiniciarRespostas(){
        setNextScreen(true);
        respostasComZap = 0;
        retornarTelaInicial();
    }
    
    return (
        nextScreen?
        <>
            <div><h2>{tituloDeck}</h2></div>
            <div className={`card ${borda}`} data-identifier="flashcard">
                <div className="top-card">
                    <div></div>
                    <div>{valor? "": deckEscolhido[indice].cardpergunta}</div>
                    <h5 data-identifier="counter">{deckEscolhido[indice].cardnumber}</h5>
                </div>
                <div className="mid-card">
                    {valor?
                    <h2>{deckEscolhido[indice].cardpergunta}</h2>
                    :
                    <h6>{deckEscolhido[indice].resposta}</h6>}
                </div>
                { valor?
                <BottomFrontCard virarCard={virarCard} />
                :
                nextValor?
                <BottomBackCard escolherResposta={escolherResposta}/>:
                <BottomNextCard nextCard={nextCard}/>
                }
            </div>
            </>
        :
            <TelaFinal numerodeAcertos={respostasComZap} numerodeZaps = {zaps} reiniciarRespostas={reiniciarRespostas}/>
    );
}