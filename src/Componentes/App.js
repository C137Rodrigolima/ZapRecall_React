import {useState} from "react";
import TelaInicio from "./TelaInicio";
import TelaFlashCard from "./TelaFlashCard";

export default function App(){
    const [trocaClasse, setTrocaClasse] = useState("invisivel");

    function trocarTela() {
        
        setTrocaClasse("mostrar");
    }

    return(
        <>
            <TelaInicio trocarTela={trocarTela}
            nomeClasse={trocaClasse === "mostrar"? "invisivel" : "mostrar"}/>
            <TelaFlashCard 
            nomeClasse={trocaClasse === "invisivel"? "invisivel" : "mostrar"}/>
        </>
    );
}