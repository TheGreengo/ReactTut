function StudyMode( { deck, thing } ) {
    return (
        <>
            <h1>Study Mode for {deck.title}</h1>
            <button onClick={() => {thing(-1)}}>Hello</button>
        </>
    );
}

export default StudyMode;