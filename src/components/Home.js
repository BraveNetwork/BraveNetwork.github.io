import React from 'react';
import NavMenu from './NavMenu';
import './Home.css';

const Home = () => (
	<main>
		<h1>LinBot Homepage</h1>
		<p>Hello Summoner!</p>
		<p>Have you checked the <a href='/commands'><span className='green'>LinBot Command Index</span></a> yet?</p>
	</main>
);

export default Home;