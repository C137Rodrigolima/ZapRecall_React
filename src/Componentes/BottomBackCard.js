export default function BottomBackCard(){
    return(
        <div className="bottom-back-card">
            <div className="selecao-card borda-preta" onClick={() =>escolherResposta("borda-preta")}>
                <h5>Aprendi agora</h5>
            </div>
            <div className="selecao-card borda-vermelha" onClick={() =>escolherResposta("borda-vermelha")}>
                <h5>Não lembrei</h5>
            </div>
            <div className="selecao-card borda-verde" onClick={() =>escolherResposta("borda-verde")}>
                <h5>Lembrei com esforço</h5>
            </div>
            <div className="selecao-card borda-amarela" onClick={() =>escolherResposta("borda-amarela")}>
                <h5>Zap!</h5>
            </div>
        </div>
    );
}