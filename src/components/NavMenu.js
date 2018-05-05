import React from 'react';
import { Link } from 'react-router-dom';
import config from './../config';
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
					<a href={config.homeURL}><img src={logo} alt='LinBot_Logo' /></a>
				</div>
				<SocialLinkSet />
			</div>
		</section>
		<div className='nav-right-wrap'>
			<div className='nav-right'>
				<p>Modified from <span class='smaller'><a href={'https://www.patreon.com/nadekobot'} target='_blank'>{'Kwoth\'s NadekoBot'}</a></span></p>
			</div>
		</div>
	</nav>
);

export default NavMenu;