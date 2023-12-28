function StudyMode( { deck, thing, thang } ) {
    return (
        <>
            <div className='lefty-righty'></div>
            <h1>Study Mode for {deck.title}</h1>
            <button onClick={() => {thing();}}>Exit</button>
        </>
    );
}

export default StudyMode;