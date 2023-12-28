function ListSelect({ decks, thing, thang, theng }) {
    return (
        <div className="lefty-righty">
            <div className="lefty">
                <div className="left-title">Your decks:</div>
                {
                    decks.map(
                        (deck, index) => (
                            (<button className="deck-select" key={index} onClick={() => {thing(index);}}>{deck.title}</button>)
                        )
                    )
                }
            </div>
            <div className="righty">
                <h1>Pick a list to start studying</h1>
                <div>{thang === -1 ? "You must select a deck first in order to enter study mode." : "you've chosen to study the " + decks[thang].title + " deck."} </div>
                <button disabled={thang === -1} onClick={theng}>Start Study Mode</button>
            </div>
        </div>
    );
}

export default ListSelect;