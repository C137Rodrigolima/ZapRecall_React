import FlashCard from "./FlashCard";

let escolhidoDeck;
export default function TelaFlashCard({nomeClasse, clicadoDeck}){

        const react = [
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
            }
        ];
        const javascript= [
            {cardnumber: "1/3", cardpergunta: "O que é Javascript?", resposta: "Resposta genérica 1"
            },
            {cardnumber: "2/3", cardpergunta: "Pergunta genérica 2", resposta: "Resposta genérica 2"
            },
            {cardnumber: "3/3", cardpergunta: "Pergutna genérica 3", resposta: "Resposta genérica 3"
            }
        ];
    
        if(clicadoDeck === "javascript"){
            escolhidoDeck = javascript;
        } else if(clicadoDeck === "react"){
            escolhidoDeck = react;
        }
    return (
        <div className={nomeClasse}>
        <header>
            <img className="logo-mini" src="assets/logo-mini.png" alt="mini-logo"/>
        </header>
            <FlashCard deckEscolhido={escolhidoDeck}/>
        </div>
    );
}