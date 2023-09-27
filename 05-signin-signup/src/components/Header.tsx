import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <>
          <Link to="/">Signin</Link>
          <Link to="/signup">Signup</Link>
        </>
      </div>
    </header>
  );
}

export default Header;
