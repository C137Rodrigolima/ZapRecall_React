export default function BottomFrontCard({virarCard, Turncardimg}){
    return(
        <div className="bottom-card">
            <img onClick={virarCard} src={Turncardimg} alt="aaa"/>
        </div>
    );
}