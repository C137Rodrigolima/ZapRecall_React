import {useState} from "react";
import TelaInicio from "./TelaInicio";
import TelaFlashCard from "./TelaFlashCard";

export default function App(){
    const [trocaClasse, setTrocaClasse] = useState("invisivel");
    const [deckClicado, setDeckClicado] = useState("")

    function trocarTela(nomeDeck) {
        setDeckClicado(nomeDeck);
        setTrocaClasse("mostrar");
    }

    return(
        <>
        {trocaClasse === "invisivel" ?
            <TelaInicio trocarTela={trocarTela}
            nomeClasse={trocaClasse === "mostrar"? "invisivel" : "mostrar"}/>
        :
            <TelaFlashCard clicadoDeck={deckClicado}
            nomeClasse={trocaClasse === "invisivel"? "invisivel" : "mostrar"}/>
    }
        </>
    );
}