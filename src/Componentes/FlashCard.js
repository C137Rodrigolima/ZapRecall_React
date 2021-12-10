import {useState} from "react";

function FlashCard(){
    const [classegiro, setClassegiro] = useState("");

    function turnAround(){
        setClassegiro(`round`);
    }

    return (
        <div className={`flash-card ${classegiro}`}>
            
            <div className="card front">
                <header>
                    <div></div>
                    <h3>aaa</h3>
                    <h4>0/8</h4>
                </header>
                <main>
                    <h2>bbb</h2>
                </main>
                
                <img onClick={turnAround} class="color" src="/assets/turn.png" alt="aaa"/>
                
            </div>
            <div className="card verse">
                <header>
                    <div></div>
                    <h3>ccc</h3>
                    <h4>0/8</h4>
                </header>
                <main>
                    <h2>ddd</h2>
                </main>
            </div>
        </div>
    );
}