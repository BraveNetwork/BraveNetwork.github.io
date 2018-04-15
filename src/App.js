import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import CommandList from './components/CommandList';

const App = () => (
	<div>
	<NavMenu user={this.state.user} />
	<Switch>
		<Route exact={true} path="/" component={CommandList} />
		<Route path="/commands" component={CommandList} />
		<Route exact={true} path="/invite" component={Invite} />
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