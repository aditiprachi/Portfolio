import React from 'react'
import "../header/Header.css"
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello there, I'm</h1>
                <h1><strong>Aditi Prachi</strong></h1>
                <Typed 
                className="typed-text"
                strings={["Web Developer", "Student", "Poet"]}
                typeSpeed={40}
                backSpeed={50}
                loop
                />
            </div>
        </div>
    )
}

export default Header
