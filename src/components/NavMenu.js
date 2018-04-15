import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';
import { UserData } from '../App';

const ghImg = '../images/github.png';
const twImg = '../images/twitter.png';
const diImg = '../images/discord.png';
const whiteLogo = '../images/logo_white.png';
const menuImg = '../images/icon-menu.svg';
const arrowUp = '../images/icon-arrow-up.svg';
const arrowDown = '../images/icon-arrow-down-white.svg';

const NavMenu = () => (
	<nav>
		<section className="nav-left-wrap">
			<div className="sidebar">
				<div className="menu-icon-wrap">
					<div className="menu-icon">
						<img src={menuImg} alt="NadekoBot_Icon_Menu" />
					</div>
				</div>
			</div>

			<div className="nav-left">
				<div className="logo">
					<NavLink to={'/'}><img src={whiteLogo} alt="NadekoBot_Logo" /></NavLink>
				</div>
				<a className="social github" target="_blank" href={'https://github.com/Kwoth/nadekobot'}>
					<div>
						<img src={ghImg} alt="NadekoBot_Github_Logo" />
					</div>
				</a>
				<a className="social discord" target="_blank" href={'https://discord.gg/nadekobot'}>
					<div>
						<img src={diImg} alt="NadekoBot_Discord_Logo" />
					</div>
				</a>
				<a className="social twitter" target="_blank" href={'https://twitter.com/TheNadekoBot'}>
					<div>
						<img src={twImg} alt="NadekoBot_Twitter_Logo" />
					</div>
				</a>
			</div>
		</section>
	</nav>
);

export default NavMenu;