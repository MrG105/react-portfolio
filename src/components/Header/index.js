import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header >

            <Link className= "mrG" to="/"> Mr.G</Link>

            {props.children}
        </header>
    )
}

export default Header;