import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import CommandList from './components/CommandList';

const copyYear = (new Date()).getFullYear();

const App = () => (
	<div>
	<NavMenu />
	<Switch>
		<Route exact={true} path="/" component={Home} />
        <Route path="/commands" component={CommandList} />
	</Switch>
	<footer>
		<div className="container">
		<div className="copyright">
			<p>LinBot (modified NadekoBot) &copy; Copyright {copyYear} The Brave Network. Original NadekoBot &copy; Copyright {copyYear} Kwoth. </p>
		</div>
		</div>
	</footer>
	</div>
);

export default App;