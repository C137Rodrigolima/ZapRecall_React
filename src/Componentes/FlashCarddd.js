import {useState}  from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function FlashCarddd(){
    const [valor, setValor] = useState(true);
    const [borda, setBorda] = useState("");
    const [respostaErrada, setRespostaErrada] = useState([]);

    const ArraydeCartoes = [
        {cardnumber: "0/8", cardpergunta: "O que é JSX?", imgTurncard: "/assets/turn.png", resposta: "Lorem ipsum dolor"
        },

        {cardnumber: "1/8", cardpergunta: "O que é JSX?", imgTurncard: "/assets/turn.png", resposta: "Lorem ipsum dolor"
        }
    ];

    function virarCard(){
        setValor(false);
    }
    function escolherResposta(parametro){
        setBorda(parametro);
        parametro === "borda-vermelha" && setRespostaErrada([...respostaErrada, 1]);
    }

    return (
        <div className="card">
            { valor? 
            <FrontCard numbercard={ArraydeCartoes[0].cardnumber} perguntacard={ArraydeCartoes[0].cardpergunta}
            Turncardimg={ArraydeCartoes[0].imgTurncard} virarCard={virarCard}/>
            : 
            <BackCard numbercard={ArraydeCartoes[0].cardnumber} perguntacard={ArraydeCartoes[0].cardpergunta}
            respostadocard={ArraydeCartoes[0].resposta} borda={borda} escolherResposta={escolherResposta} />
            }
        </div>
    );
}