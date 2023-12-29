import { useState } from "react";

function FlashCard({ card }) {
    let [isFront, change] = useState(true);

    return (
        <div>{card.front}</div>
    );
}

export default FlashCard;