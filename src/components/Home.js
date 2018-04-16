import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
	<main>
		<h1>LinBot Homepage</h1>
		<p>Hello Summoner!</p>
		<p>Have you checked the <Link to='/commands'>
			<span className='green'>LinBot Command Index</span>
		</Link> yet?</p>
	</main>
);

export default Home;