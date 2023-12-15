import '../../main.css'

function getFinal(assignments) {
    let result = 0;
    for (let i = 0; i < assignments.length; i++) {
        result += assignments[i]["grade"];
    }
    return (result / assignments.length);
}

function FinalGrades({ assignments }) {
    return (
        <div className="final">Final Score: {getFinal(assignments)}%</div>
    );
}

export default FinalGrades;