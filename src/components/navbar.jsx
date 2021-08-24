import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../index.css'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg ">

            <Link to="/" className="navbar-brand" activeClassName='active--navbar--btn'>Vidly</Link>
    
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                <NavLink to="/movies" className="nav-link" activeClassName='active--navbar--btn'>Movies</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/customers"  className="nav-link"  activeClassName='active--navbar--btn'>Customers</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/rental"  className="nav-link"  activeClassName='active--navbar--btn'>Rantal</NavLink>
                </li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar
