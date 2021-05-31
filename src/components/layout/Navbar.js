import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    
      <div className="container">
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
      </div>
  );
};

export default Navbar;
