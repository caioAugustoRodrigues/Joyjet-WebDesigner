import React from 'react';
import './css/main.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Blog from './components/blog';
import About from './components/about';
import Footer from './components/footer';
import StickyNav from './components/sticky-nav';

export default function App() {
	return (
		<>	
			<NavBar />
			<Hero />
			<StickyNav />
			<Blog />
			<About />
			<About />
			<About />
			<Footer />
		</>
  	);
}
