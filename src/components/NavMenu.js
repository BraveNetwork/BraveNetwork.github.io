import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const ghImg = '../images/github.png';
const twImg = '../images/twitter.png';
const diImg = '../images/discord.png';
const whiteLogo = '../images/logo_white.png';
const menuImg = '../images/icon-menu.svg';

const github = 'https://github.com/NetworkFrontier/LinBot';
const discord = 'https://discord.gg/bravenetwork';

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
				<a className="social github" target="_blank" href={github}>
					<div>
						<img src={ghImg} alt="NadekoBot_Github_Logo" />
					</div>
				</a>
				<a className="social discord" target="_blank" href={discord}>
					<div>
						<img src={diImg} alt="NadekoBot_Discord_Logo" />
					</div>
				</a>
			</div>
		</section>
	</nav>
);

export default NavMenu;