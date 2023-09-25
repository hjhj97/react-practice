import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">Signin</Link>
      <Link to="/signup">Signup</Link>
    </header>
  );
}

export default Header;
