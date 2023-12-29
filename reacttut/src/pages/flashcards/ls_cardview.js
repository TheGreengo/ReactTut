import { useState } from "react";

function LSCardView({ card }) {
    let [check, getChecked] = useState(card.starred);

    const makeCheck = () => {
        getChecked(!check);
        card.starred = !card.starred;
    }

    return (
        <div className="listed-card">
            <div className="listed-card-title">Front</div>
            <div className="listed-card-title">Back</div>
            <div className="listed-card-title">Selected</div>
            <div className="bord"></div>
            <div className="bord"></div>
            <div className="bord"></div>
            <div className="listed-card-field">
                {card.front}
            </div>
            <div className="listed-card-field">
                {card.back}
            </div>
            <label>
                <input 
                onChange={makeCheck} 
                className="listed-card-star" 
                type="checkbox" 
                checked={check}
                />

            </label>
        </div>
    );
}

export default LSCardView;