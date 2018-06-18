import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <nav>
            <ul>
                <li> <Link to={'/'}> Home </Link> </li>
                <li> <Link to={'/images'}> Images </Link> </li>
                <li> <Link to={'/sort'}> Sort </Link> </li>
            </ul>
        </nav>

    )

}

export default Header;