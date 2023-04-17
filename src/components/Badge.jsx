import React from 'react'

const Badge = ({ icon }) => {
	const Icon = icon

	return (
		<div className='p-4 bg-ocean-200 rounded-2xl'>
			<Icon size={24} className='text-ocean-300' />
		</div>
	)
}

export default Badge
