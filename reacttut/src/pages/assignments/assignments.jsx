import { useEffect, useState } from "react";

function Assignments() {
  let [thing, thang] = useState("not a success");

  useEffect(() => {
    fetch('http://127.0.0.1:8000/thing/')
    .then(res => res.json())
    .then(data => thang(data.text));
  });

  return (
    <div className="page-center">
        <div className="page">Assignments Page</div>
        <div>The response was {thing}</div>
      </div>
  );
}

export default Assignments;