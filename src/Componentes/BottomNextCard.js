export default function BottomNextCard({nextCard,}){
    return(
        <div className="bottom-card">
            <img onClick={nextCard} src="./assets/turn.png" alt="seta de giro"/>
        </div>
    );
}