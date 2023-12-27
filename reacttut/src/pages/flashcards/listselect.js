function ListSelect({ decks, thing, thang }) {
    return (
        <>
            <h1>Pick a list to start studying</h1>
            {
                decks.map(
                    (deck, index) => (
                        (<button key={index} onClick={() => {thing(index);}}>{deck.title}</button>)
                    )
                )
            }
            <div>{thang === -1 ? "No deck chosen yet?" : "you've chosen to study the " + decks[thang].title + " deck."} </div>
        </>
    );
}

export default ListSelect;