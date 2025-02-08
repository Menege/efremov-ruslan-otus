import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tasks/new">Add Task</Link>
    </nav>
  </header>
);

export default Header;
