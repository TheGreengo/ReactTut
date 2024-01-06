import { useState } from "react";

function FlashCard({ card }) {
    let [isFront, change] = useState(true);

    return (
        <div onClick={() => {change(!isFront);}} className="study-card">
            <div className="card-hold">
                <div className="card-body-front">
                    { card.front }
                </div>
                <div className="card-body-back">
                    { card.back }
                </div>
            </div>
        </div>
    );
}

export default FlashCard;