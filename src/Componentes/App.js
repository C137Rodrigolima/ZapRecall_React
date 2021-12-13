import {useState} from "react";
import TelaInicio from "./TelaInicio";
import TelaFlashCard from "./TelaFlashCard";

export default function App(){
    const [trocaClasse, setTrocaClasse] = useState("invisivel");
    const [nomeDeck, setNomeDeck] = useState("");
    const [zaps, setZaps] = useState(0);

    function trocarTela(deckClicado, numero) {
        setNomeDeck(deckClicado);
        setTrocaClasse("mostrar");
        guardarZaps(numero)
    }
    function guardarZaps(numero){
        setZaps(parseInt(numero));
    }
    function retornarTelaInicial(){
        setTrocaClasse("invisivel");
        setNomeDeck("");
    }

    return(
        <>
        {trocaClasse === "invisivel" ?
            <TelaInicio trocarTela={trocarTela}
            nomeClasse={trocaClasse === "mostrar"? "invisivel" : "mostrar"}/>
        :
            <TelaFlashCard deckNome={nomeDeck} zaps={zaps} retornarTelaInicial={retornarTelaInicial}
            nomeClasse={trocaClasse === "invisivel"? "invisivel" : "mostrar"}/>
    }
        </>
    );
}