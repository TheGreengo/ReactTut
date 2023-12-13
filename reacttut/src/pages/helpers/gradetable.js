import '../../main.css';

function GradeTable({assignments}) {
    return (
        <table className="tabularizms">
            <thead className="tabularizms">
                <tr className="tabularizms">
                    <th className="tabularizms">Assignment</th>
                    <th className="tabularizms">Grade</th>
                    <th className="tabularizms">% of total</th>
                </tr>
            </thead>
            <tbody className="tabularizms">
                { 
                assignments.map(thing => (
                <tr className="tabularizms">
                    <td className="tabularizms">{thing["title"]}</td>
                    <td className="tabularizms">{thing["grade"]}</td>
                    <td className="tabularizms">{thing["weight"]}</td>
                </tr>
                ))
                }
            </tbody>
      </table>
    );
}

export default GradeTable;