import React from 'react';
import logo from './logo.svg';
import './css/main.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Blog from './components/blog';

export default function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<Blog />
		</>
  	);
}
