import { Outlet, Link } from "react-router-dom";

function MenuBase() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/flashcards">Flashcards</Link>
        <Link to="/grades">Grades</Link>
        <Link to="/lessons">Lessons</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default MenuBase;