import React from 'react';
import Logo from '../logo';

export default function StickyNav() {

    return (
        <> 
            <div className="sticky-nav" id="sticky">
                <Logo />
                <ul>
                    <li>
                        <a href="https://joyjet.com/">Blog</a>
                    </li>
                    <li>
                        <a href="https://joyjet.com/">Popular</a>
                    </li>
                    <li>
                        <a href="https://joyjet.com/">Archive</a>
                    </li>
                    <li>
                        <a href="https://joyjet.com/">About</a>
                    </li>
                </ul>
            </div>
        </>
    )
}