import React from 'react'

const DashboardFormProgressbar = ({ progress }) => {
	return (
		progress > 0 && (
			<div className='w-full h-2 bg-neutral-600 rounded-lg overflow-hidden'>
				<div
					className='h-full bg-green-400'
					style={{ width: `${progress}%` }}
				/>
			</div>
		)
	)
}

export default DashboardFormProgressbar
