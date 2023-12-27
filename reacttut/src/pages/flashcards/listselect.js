function ListSelect({ decks, thing }) {
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
        </>
    );
}

export default ListSelect;