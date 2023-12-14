import '../../main.css'

function AssignmentRow({ thing }) {
    return (
        <>
            <div className="norm row-start">{thing["title"]}</div>
            <div className="norm row-start">{thing["grade"]}</div>
            <div className="norm">{thing["weight"]}</div>
        </>
    );
}

export default AssignmentRow