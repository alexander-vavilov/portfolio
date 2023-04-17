import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLink = ({ to, children }) => {
	return (
		<Link
			to={to}
			className='flex items-center text-ocean-300 active:text-opacity-80'
		>
			{children}
		</Link>
	)
}

export default NavigationLink
