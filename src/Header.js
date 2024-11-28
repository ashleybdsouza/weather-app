import React from 'react';
import './styles/App.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Ashley Dsouza</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;