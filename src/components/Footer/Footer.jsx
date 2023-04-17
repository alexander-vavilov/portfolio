import React from 'react'
import SocialLinks from '../Hero/SocialLinks/SocialLinks'

const Footer = () => {
	return (
		<footer className='bg-white dark:bg-neutral-800 transition-background'>
			<div className='container flex flex-col justify-center items-center py-4'>
				<SocialLinks />
				<span>© {new Date().getFullYear()} - HittauDev</span>
			</div>
		</footer>
	)
}

export default Footer
