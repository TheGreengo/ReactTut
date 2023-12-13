import GradeTable from "./helpers/gradetable";
import FinalGrades from "./helpers/finalgrade";
import '../main.css';

function getGrades() {
  return {
    "assignments": [
      {
          "title": "assignment 1",
          "grade": 89,
          "weight": 5
      },
      {
          "title": "assignment 2",
          "grade": 90,
          "weight": 5
      },
      {
          "title": "assignment 3",
          "grade": 91,
          "weight": 5
      },
      {
          "title": "assignment 4",
          "grade": 92,
          "weight": 5
      },
      {
          "title": "assignment 5",
          "grade": 93,
          "weight": 5
      },
      {
          "title": "assignment 6",
          "grade": 94,
          "weight": 5
      },
      {
          "title": "project 1",
          "grade": 95,
          "weight": 10
      },
      {
          "title": "project 2",
          "grade": 96,
          "weight": 10
      },
      {
          "title": "midterm 1",
          "grade": 97,
          "weight": 15
      },
      {
          "title": "midterm 2",
          "grade": 98,
          "weight": 15
      },
      {
          "title": "final",
          "grade": 99,
          "weight": 20
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
      <FinalGrades assignments={thing.assignments}/>
    </div>
  );
}
  
export default Grades;