import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">
          JMD-CRICKET 2024
        </Link>
        <div>

        <Link className="navbar-brand text-white" to="/users">
          Teams
        </Link>
        <Link className="navbar-brand text-white" to="/register">
          Register
        </Link>
        </div>
      </div>
    </nav>
  );
}
