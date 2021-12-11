import FlashCard from "./FlashCard";

export default function TelaFlashCard({nomeClasse}){

    return (
        <div className={nomeClasse}>
        <header>
            <img className="logo-mini" src="assets/logo-mini.png" alt="mini-logo"/>
        </header>
            <FlashCard />
        </div>
    );
}