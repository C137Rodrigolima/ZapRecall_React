import FlashCarddd from "./FlashCarddd";

export default function TelaFlashCard({nomeClasse}){

    

    return (
        <div className={nomeClasse}>
        <div className="window2-top">
            <img className="logo-mini" src="assets/logo-mini.png" alt="aaa"/>
        </div>
            <FlashCarddd />
        </div>
    );
}