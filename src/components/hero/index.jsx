import React from 'react';
import DesktopHeroText from './desktop-text/index';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__inner">
                <div className="hero__inner__title">
                    <h1>Space<span>.</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie elit at lacus…</p>
                </div>
                <button className="btn btn-primary">Click</button>
            </div>
            <DesktopHeroText />
        </section>
    )
}