import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="App-header" style={{ display: 'flex' }}>
      <Link to="/">Home</Link>
      <Link to="/page">Page</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </header>
  );
}
