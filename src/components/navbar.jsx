import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../index.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">

            <Link to="/" className="navbar-brand" activeClassName='active--navbar--btn'>Vidly</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink to="/movies" className="nav-link" activeClassName='active--navbar--btn'>Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/customers"  className="nav-link"  activeClassName='active--navbar--btn'>Customers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/rental"  className="nav-link"  activeClassName='active--navbar--btn'>Rantal</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login"  className="nav-link"  activeClassName='active--navbar--btn'>Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/register"  className="nav-link"  activeClassName='active--navbar--btn'>Register</NavLink>
                </li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar
