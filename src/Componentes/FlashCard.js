import {useState}  from "react";
import BottomFrontCard from "./BottomFrontCard";
import BottomBackCard from "./BottomBackCard";
import BottomNextCard from "./BottomNextCard";
import TelaFinal from "./TelaFinal";

let respostasErradas = 0;
let indice = 0;

export default function FlashCard(){
    const [valor, setValor] = useState(true);
    const [borda, setBorda] = useState("");
    const [nextValor, setNextValor] = useState(true);
    const [nextScreen, setNextScreen] = useState(true);

    const ArraydeCartoes = [
        {cardnumber: "1/8", cardpergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"
        },
        {cardnumber: "2/8", cardpergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {cardnumber: "3/8", cardpergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"
        },
        {cardnumber: "4/8", cardpergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"
        },
        {cardnumber: "5/8", cardpergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {cardnumber: "6/8", cardpergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {cardnumber: "7/8", cardpergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes"
        },
        {cardnumber: "8/8", cardpergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ];

    function virarCard(){
        setValor(false);
    }
    function escolherResposta(parametro){
        setBorda(parametro);
        parametro === "borda-vermelha" && respostasErradas++;
        setNextValor(false);
    }
    function nextCard(){
        setValor(true);
        setBorda("");
        if((ArraydeCartoes.length - 1) !== indice){
            indice++;
        } else{
            setNextScreen(false);
            indice = 0;
        }
        setNextValor(true);
    }

    return (
        nextScreen?
            <div className={`card ${borda}`} data-identifier="flashcard">
                <div className="top-card">
                    <div></div>
                    <div>{valor? "": ArraydeCartoes[indice].cardpergunta}</div>
                    <h5 data-identifier="counter">{ArraydeCartoes[indice].cardnumber}</h5>
                </div>
                <div className="mid-card">
                    {valor? <h2>{ArraydeCartoes[indice].cardpergunta}</h2>
                    : <h6>{ArraydeCartoes[indice].resposta}</h6>}
                </div>
                { valor?
                <BottomFrontCard virarCard={virarCard} />
                :
                nextValor?
                <BottomBackCard escolherResposta={escolherResposta}/>:
                <BottomNextCard nextCard={nextCard}/>
                }
            </div>
        :
            <TelaFinal numerodeErros={respostasErradas}/>
    );
}