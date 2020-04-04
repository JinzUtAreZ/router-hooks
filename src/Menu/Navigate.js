import React from 'react';
import { Link } from 'react-router-dom';

function Navigate() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link className="nav-linked" to="/about">
          <li>About</li>
        </Link>
        <Link className="nav-linked" to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigate;
