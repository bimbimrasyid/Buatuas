import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Abimanyu'Store</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="/ListMotor" className="navbar-link">
            Motorcycle
          </Link>
        </li>

        <li className="navbar-item">
          <Link href="/about" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
