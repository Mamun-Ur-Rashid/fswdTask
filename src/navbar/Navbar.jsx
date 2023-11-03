import React, { useState } from 'react';
import { NavbarContainer, NavLinks, NavLink, HamburgerMenu } from '../component/styles/NavbarStyle';
import { H2} from '../component/styles/ElementStyle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavbarContainer>
            <H2>Books Service</H2>
            <NavLinks>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Products</NavLink>
                <NavLink>Contact</NavLink>
            </NavLinks>
            <HamburgerMenu onClick={toggleMenu}>
                <div>&#9776;</div>
            </HamburgerMenu>
        </NavbarContainer>
    );
};

export default Navbar;