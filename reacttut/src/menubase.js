import { Outlet, Link } from "react-router-dom";

function MenuBase() {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">GetSkooled</Link>
        </div>
        <div className="choices">
          <Link to="/assignments">Assignments</Link>
          <Link to="/flashcards">Flashcards</Link>
          <Link to="/grades">Grades</Link>
          <Link to="/lessons">Lessons</Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default MenuBase;