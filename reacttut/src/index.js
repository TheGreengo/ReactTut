import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './menu';
import Home from './home';
import Bottom from './bottom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Menu />
    <Home />
    <Bottom />
  </>
);
