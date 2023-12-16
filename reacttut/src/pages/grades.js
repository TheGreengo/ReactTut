import GradeTable from "./helpers/gradetable";
import '../main.css';

function getGrades() {
  return {
    "assignments": [
      {
          "title": "assignment 1",
          "grade": 89,
          "weight": 5,
          "deets": "The first assignment"
      },
      {
          "title": "assignment 2",
          "grade": 90,
          "weight": 5,
          "deets": "The second assignment"
      },
      {
          "title": "assignment 3",
          "grade": 91,
          "weight": 5,
          "deets": "The third assignment"
      },
      {
          "title": "assignment 4",
          "grade": 92,
          "weight": 5,
          "deets": "The fourth assignment"
      },
      {
          "title": "assignment 5",
          "grade": 93,
          "weight": 5,
          "deets": "The fifth assignment"
      },
      {
          "title": "assignment 6",
          "grade": 94,
          "weight": 5,
          "deets": "The sixth assignment"
      },
      {
          "title": "project 1",
          "grade": 95,
          "weight": 10,
          "deets": "The first project"
      },
      {
          "title": "project 2",
          "grade": 96,
          "weight": 10,
          "deets": "The second project"
      },
      {
          "title": "midterm 1",
          "grade": 97,
          "weight": 15,
          "deets": "The first midterm"
      },
      {
          "title": "midterm 2",
          "grade": 98,
          "weight": 15,
          "deets": "The second midterm"
      },
      {
          "title": "final",
          "grade": 89,
          "weight": 20,
          "deets": "When darkness turns to light this ends to night..."
      }
    ]
  }
}

function Grades() {
  const thing = getGrades();
  return (
    <div className="page-center">
      <div className="page">Grades Page</div>
      <GradeTable assignments={thing.assignments}/>
    </div>
  );
}
  
export default Grades;