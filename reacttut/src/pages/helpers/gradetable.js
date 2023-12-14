import '../../main.css';
import AssignmentRow from './assignrow';

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
                <AssignmentRow thing={thing}/>
            ))
            }
        </div>
    );
}

export default GradeTable;