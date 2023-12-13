import '../../main.css';

function GradeTable({assignments}) {
    return (
        <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Grade</th>
            <th>% of total</th>
          </tr>
        </thead>
        <tbody>
          { 
          assignments.map(thing => (
          <tr>
            <td>{thing["title"]}</td>
            <td>{thing["grade"]}</td>
            <td>{thing["weight"]}</td>
          </tr>
          ))
          }
        </tbody>
      </table>
    );
}

export default GradeTable;