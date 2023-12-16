import '../../main.css'
import { React, useState } from 'react'


//@babel/plugin-proposal-private-property-in-object

function AssignmentRow({ thing }) {
    const [deets, flipState] = useState(false);

    const flippityFloppity = () => {
        flipState(deets => !deets);
    }

    return (
        <>
            <div onClick={flippityFloppity} className="norm row-start">{thing["title"]}</div>
            <div className="norm row-start">{thing["grade"]}</div>
            <div className="norm">{thing["weight"]}</div>
            { deets && <div onClick={flippityFloppity} className="decsprition">{thing["deets"]}</div>}
        </>
    );
}

export default AssignmentRow