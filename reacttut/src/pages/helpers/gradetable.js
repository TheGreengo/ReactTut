import '../../main.css';
import AssignmentRow from './assignrow';
import FinalGrades from './finalgrade';

// I think we need some css grid to get the outlines right
// This also needs to have keys implemented for the assignment rows
function GradeTable({assignments}) {
    return (
        <div className="tabularizms row">
            <div className="head row-first">Assignment</div>
            <div className="head row-first">Grade</div>
            <div className="head">% of total</div>
            { 
            assignments.map(thing => (
                <AssignmentRow key={thing.title} thing={thing}/>
            ))
            }
            <FinalGrades assignments={assignments}/>
        </div>
    );
}

export default GradeTable;