import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import CommandList from './components/CommandList';

const copyYear = (new Date()).getFullYear();

const App = () => (
	<Router>
		<div>
			<NavMenu />
			<Route exact path="/" component={Home} />
        	<Route path="/commands" component={CommandList} />
			<footer>
				<div className="container">
				<div className="copyright">
					<p>LinBot (modified NadekoBot) &copy; Copyright {copyYear} The Brave Network. Original NadekoBot &copy; Copyright {copyYear} Kwoth. </p>
				</div>
				</div>
			</footer>
		</div>
	</Router>
);

export default App;