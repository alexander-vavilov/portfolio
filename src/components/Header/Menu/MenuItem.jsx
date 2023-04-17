import React from 'react'

const MenuItem = ({ name, path, handleCloseMenu }) => {
	return (
		<li onClick={handleCloseMenu}>
			<a href={path} className='relative text-xl md:text-base link-underline'>
				<span className='text-ocean-300'>#</span>
				{name}
			</a>
		</li>
	)
}

export default MenuItem
