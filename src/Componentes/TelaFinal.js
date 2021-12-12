export default function TelaFinal({numerodeErros}){

    return(
        numerodeErros === 0? 
        <div className="tela-final">
                <h1>PARABÉNS! <img src="./assets/party.png" alt="party"/></h1>
                <h4>Você não esqueceu de nenhum flashcard!</h4>
        </div>
        :
        <div className="tela-final">
            <h1>Putz.. <img src="./assets/sad.png" alt="sad"/></h1>
            <h4>Você esqueceu alguns flashcards.. Não desanime! Na próxima você consegue!</h4>
        </div>
        
    );
}