import React from 'react'
import Badge from '../Badge'

const ContactLink = ({ icon, title, subtitle, path }) => {
	return (
		<li>
			<a href={path} target='blank' className='flex items-center gap-6'>
				<Badge icon={icon} />
				<div>
					<h3 className='font-medium pb-1 capitalize'>{title}</h3>
					<p className='text-sm text-zinc-400'>{subtitle}</p>
				</div>
			</a>
		</li>
	)
}

export default ContactLink
