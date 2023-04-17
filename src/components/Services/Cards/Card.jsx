import React from 'react'
import Badge from '../../Badge'
import TitleSmaller from '../../Text/TitleSmaller'

const Card = ({ icon, title, subtitle }) => {
	return (
		<div className='flex flex-col items-center text-center rounded-lg bg-white dark:bg-neutral-800 p-8 transition-background'>
			<Badge icon={icon} />
			<TitleSmaller className='pt-6 pb-4'>{title}</TitleSmaller>
			<p className='text-sm leading-6'>{subtitle}</p>
		</div>
	)
}

export default Card
