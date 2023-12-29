import { useState } from "react";

function StudyMode( { deck, thing, thang } ) {
    let [curr, setCurr] = useState(0);

    return (
        <>
            <div className="study-top">
                <button className="exit-btn" onClick={() => {thing(-1);}}>X</button>
                <h1 className="deck-label">{deck.title}</h1>
                <div></div>
            </div>
            <div className="study-hold">
                <button className="toggle-btn" disabled={curr === 0} onClick={() => {setCurr(curr - 1);}}>
                    <svg className="thang">
                        <path d="M 5,25 45,5 45,45 Z"/>
                    </svg>
                </button>
                <div>This will be the card {curr}</div>
                <button className="toggle-btn" disabled={curr === deck.cards.length - 1} onClick={() => {setCurr(curr + 1);}}>
                    <svg className="thang">
                        <path d="M 45,25 5,45 5,5 z"/>
                    </svg>
                </button>
            </div>
        </>
    );
}

export default StudyMode;