export default function FrontCard({numbercard, perguntacard, Turncardimg, virarCard}){
    return(
        <div className="frontcard">
            <div className="top-card">
                <div></div>
                <h4>{numbercard}</h4>
            </div>
            <div className="mid-card"><h2>{perguntacard}</h2></div>
            <div className="bottom-card">
                <img onClick={virarCard} src={Turncardimg} alt="aaa"/>
            </div>
        </div>
    );
}