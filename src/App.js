import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import CommandList from './components/CommandList';

const App = () => (
	<div>
	<NavMenu />
	<Switch>
		<Route path="/" component={CommandList} />
	</Switch>
	<footer>
		<div className="container">
		<div className="copyright">
			<p>Modified LinBot Commands website &copy; Copyright 2018 Brave Network. Original NadekoBot Commands website &copy; Copyright 2018 Kwoth. </p>
		</div>
		</div>
	</footer>
	</div>
);

export default App;