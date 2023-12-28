import { React } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.css';
import MenuBase from './menubase'
import Home from './home'
import Assignments from './pages/assignments/assignments'
import Flashcards from './pages/flashcards/flashcards'
import Grades from './pages/grades/grades'
import Lessons from './pages/lessons/lessons'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuBase />}>
          <Route index element={<Home />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="grades" element={<Grades />} />
          <Route path="lessons" element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
