import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialLinkSet from './SocialLinkSet';
import './NavMenu.css';

const logo = require('../images/avatar-linbot.png');
const menuImg = require('../images/icon-menu.svg');

const NavMenu = () => (
	<nav>
		<section className='nav-left-wrap'>
			<div className='sidebar'>
				<div className='menu-icon-wrap'>
					<div className='menu-icon'>
						<img src={menuImg} alt='NadekoBot_Icon_Menu' />
					</div>
				</div>
			</div>

			<div className='nav-left'>
				<div className='logo'>
					<NavLink to={'/'}><img src={logo} alt='LinBot_Logo' /></NavLink>
				</div>
				<SocialLinkSet />
			</div>
		</section>
		<div className='nav-right-wrap'>
			<div className='nav-right'>
				<p>Modified from <span class='smaller'><NavLink to={'https://www.patreon.com/nadekobot'}>Kwoth's NadekoBot</NavLink></span></p>
			</div>
		</div>
	</nav>
);

export default NavMenu;