import React from 'react';

export default function NavBar() {
    let showMenu = false;
    
    function toggleMenu() {
        const hamburger = document.querySelector('.menu-btn__burger');
        const nav = document.querySelector('.nav');
        const menuNav = document.querySelector('.menu-nav');
        const navItems = document.querySelectorAll('.menu-nav__item');

        if (!showMenu) {
            hamburger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open');
            navItems.forEach(item => item.classList.add('open'));

            showMenu = true;
        } else {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
            menuNav.classList.remove('open');
            navItems.forEach(item => item.classList.remove('open'));

            showMenu = false;
        }
    }

    function handleNavWidth() {
        if (window.innerWidth > 768) {
            return "container"
        } else {
            return ''
        }
    }

    return (
        <header className={`header ${handleNavWidth}`}>
            <span className="logo"></span>

            <div className="menu-btn" onClick={toggleMenu}>
                <span className="menu-btn__burger"></span>
            </div>

            <nav className="nav">
                <div className="menu-nav">
                    <ul className="menu-nav__inner">
                        <li className="menu-nav__item">
                            <a href="https://joyjet.com/" className="menu-nav__link">
                                Blog
                            </a>
                        </li>
                        <li className="menu-nav__item">
                            <a href="https://joyjet.com/" className="menu-nav__link">
                                Popular
                            </a>
                        </li>
                        <li className="menu-nav__item contact">
                            <a href="https://joyjet.com/" className="menu-nav__link">
                                Archive
                            </a>
                        </li>
                        <li className="menu-nav__item contact">
                            <a href="https://joyjet.com/" className="menu-nav__link">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}