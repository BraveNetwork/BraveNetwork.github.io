import React from 'react';

const placeholder = require('../images/social/placeholder.png');
const socialLinks = [
	{
		title: 'Check our GitHub',
		url: 'https://github.com/BraveNetwork/LinBot',
		classes: 'social github',
		img: {
			src: require('../images/social/github.png'),
			alt: 'GitHub_Logo'
		}
	},
	{
		title: 'Join our Discord',
		url: 'https://discord.gg/bravenetwork',
		classes: 'social discord',
		img: {
			src: require('../images/social/discord.png'),
			alt: 'Discord_Logo'
		}
	},
	{
		title: 'Support us on Patreon',
		url: 'https://www.patreon.com/bravenetwork',
		classes: 'social patreon',
		img: {
			src: require('../images/social/patreon.png'),
			alt: 'Patreon_Logo'
		}
	},
	{
		title: 'Brave Frontier Reddit',
		url: 'https://www.reddit.com/r/bravefrontier/',
		classes: 'social reddit',
		img: {
			src: require('../images/social/reddit-bf.png'),
			alt: 'Reddit_Logo'
		}
	},
	{
		title: 'Brave Frontier 2 Reddit',
		url: 'https://www.reddit.com/r/bravefrontier2/',
		classes: 'social reddit',
		img: {
			src: require('../images/social/reddit-bf2.png'),
			alt: 'Reddit_Logo_2'
		}
	},
	{
		title: 'Brave Frontier Global Wiki',
		url: 'https://bravefrontierglobal.wikia.com/',
		classes: 'social wiki',
		img: {
			src: require('../images/social/wiki.png'),
			alt: 'Wiki_Logo'
		}
	}
];

const SocialLinkSet = () => {
	return (
		socialLinks.map( (link, key) => (
			<a key={key}
			className={link.classes} 
			target='_blank' 
			href={link.url} 
			title={link.title}>
				<div>
					<img src={link.img.src || placeholder} alt={link.img.alt} />
				</div>
			</a>
		) )
	);
};

export default SocialLinkSet;