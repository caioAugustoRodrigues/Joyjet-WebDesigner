import React, { useState, useEffect } from 'react';
import './css/main.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Blog from './components/blog';
import About from './components/about';
import Footer from './components/footer';

export default function App() {
	return (
		<>	
			<NavBar />
			<Hero />
			<Blog />
			<About />
			<Footer />
		</>
  	);
}
