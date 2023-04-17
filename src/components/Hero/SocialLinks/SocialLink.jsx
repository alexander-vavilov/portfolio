import React from 'react'

const SocialLink = ({ icon: Icon, path, ariaLabel }) => {
	return (
		<li>
			<a
				href={path}
				aria-label={ariaLabel}
				className='text-neutral-800 dark:text-zinc-100 hover:text-ocean-300 dark:hover:text-ocean-300 duration-300'
				target='blank'
			>
				<Icon size={24} />
			</a>
		</li>
	)
}

export default SocialLink
