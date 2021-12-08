import React from 'react';
import "../App.css"

export const Header = () => {
    return (
        <div>
            
            <nav className="navbar">
            <div className="logo">mahmed</div>
            <a href="#" className="toggleBtn">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="NavLinks">
                <ul>
                    <li> <a href="#">home</a> </li>
                    <li> <a href="#about">About</a> </li>
                    <li> <a href="projects.html">Projects</a> </li>
                    <li> <a href="#contact">Contact</a> </li>
                </ul>
            </div>
        </nav>

        </div>
    )
}
