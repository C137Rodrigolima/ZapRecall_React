export default function BottomBackCard({escolherResposta}){
    return(
        <div className="bottom-back-card">
            <div className="selecao-card borda-preta" onClick={() =>escolherResposta("borda-preta")}>
                <div className="h7">Aprendi agora</div>
            </div>
            <div className="selecao-card borda-vermelha" onClick={() =>escolherResposta("borda-vermelha")}>
                <div className="h7">Não lembrei</div>
            </div>
            <div className="selecao-card borda-verde" onClick={() =>escolherResposta("borda-verde")}>
                <div className="h7">Lembrei com esforço</div>
            </div>
            <div className="selecao-card borda-amarela" onClick={() =>escolherResposta("borda-amarela")}>
                <div className="h7">Zap!</div>
            </div>
        </div>
    );
}