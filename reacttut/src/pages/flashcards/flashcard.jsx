import { useState } from "react";

function FlashCard({ card }) {
    let [isFront, change] = useState(true);

    return (
        <div onClick={() => {change(!isFront);}} className="study-card">
            <div className="card-body">
                {isFront ? card.front : card.back}
            </div>
        </div>
    );
}

export default FlashCard;