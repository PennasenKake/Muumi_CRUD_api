import { Link } from "react-router-dom";
import React from "react";



export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#102538', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
            <div className="container">
                <Link className="navbar-brand text-light" to="/">
                    <img src="designer1.jpeg" alt="Logo" width="60" height="60" className="me-4" />
                    Muumi mukit
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </a>
                            <ul className="dropdown-menu text-light">
                                <li><Link className="dropdown-item" to="/products">Products</Link></li>
                                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;