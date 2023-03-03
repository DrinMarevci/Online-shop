import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <Link to="/" className="sidebar-link" onClick={toggle}>
        Shop Products Here
      </Link>
      <Link to="/cart" className="sidebar-link" onClick={toggle}>
        Selected Products → <ShoppingCart size={44} />
      </Link>
    </aside>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          onClick={toggle}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          Shop Products Here
        </Link>
      </div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </nav>
  );
};

export default Navbar;
