import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar justify-center bg-base-300">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Home
      </Link>
      <Link to="/showbooks" className="btn btn-ghost normal-case text-xl">
        Show books
      </Link>
      <Link to="/addbooks" className="btn btn-ghost normal-case text-xl">
        Add books
      </Link>
    </div>
  );
};

export default Navbar;
