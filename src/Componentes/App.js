import {useState} from "react";
import TelaInicio from "./TelaInicio";
import TelaFlashCard from "./TelaFlashCard";

export default function App(){
    const [trocaClasse, setTrocaClasse] = useState("invisivel");
    const [nomeDeck, setNomeDeck] = useState("");
    

    function trocarTela(deckClicado, numeroDeck) {
        setNomeDeck(deckClicado);
        setTrocaClasse("mostrar");
    }

    return(
        <>
        {trocaClasse === "invisivel" ?
            <TelaInicio trocarTela={trocarTela}
            nomeClasse={trocaClasse === "mostrar"? "invisivel" : "mostrar"}/>
        :
            <TelaFlashCard deckNome={nomeDeck}
            nomeClasse={trocaClasse === "invisivel"? "invisivel" : "mostrar"}/>
    }
        </>
    );
}