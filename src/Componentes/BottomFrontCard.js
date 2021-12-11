export default function BottomFrontCard({virarCard}){
    return(
        <div className="bottom-card">
            <img onClick={virarCard} src="./assets/turn.png" alt="seta de giro" data-identifier="arrow"/>
        </div>
    );
}