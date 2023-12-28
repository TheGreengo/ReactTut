function LSCardView({ card }) {
    return (
        <div className="listed-card">
            <div className="listed-card-field">
                {card.front}
            </div>
            <div className="listed-card-field">
                {card.back}
            </div>
            <input  className="listed-card-field" type="checkbox" checked={card.starred}/>
        </div>
    );
}

export default LSCardView;