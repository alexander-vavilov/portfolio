import React from 'react'
import { FaGithub, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import SocialLink from './SocialLink'

const socialLinks = [
	{
		icon: FaTelegramPlane,
		path: 'https://t.me/Hittttau',
		ariaLabel: 'telegram',
	},
	{
		icon: FaGithub,
		path: 'https://github.com',
		ariaLabel: 'github',
	},
	{
		icon: FaTwitter,
		path: 'https://twitter.com',
		ariaLabel: 'twitter',
	},
]

const SocialLinks = () => {
	return (
		<ul className='flex gap-8 py-4'>
			{socialLinks.map(({ icon, path, ariaLabel }) => (
				<SocialLink key={path} icon={icon} path={path} ariaLabel={ariaLabel} />
			))}
		</ul>
	)
}

export default SocialLinks
