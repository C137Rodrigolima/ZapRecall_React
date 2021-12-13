export default function BottomNextCard({nextCard,}){
    return(
        <div className="bottom-card" data-identifier="arrow">
            <img onClick={nextCard} src="./assets/turn.png" alt="seta de giro"/>
        </div>
    );
}