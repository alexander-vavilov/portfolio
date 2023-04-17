import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const TechnologiesItem = ({ name, onClick, removable }) => {
	return (
		<li
			target='blank'
			className='flex items-center gap-2 p-2 border-cinder-100 border-2 rounded-md'
		>
			<span className='leading-none'>{name}</span>
			{removable && (
				<div onClick={onClick} className='hover:text-red-500 cursor-pointer'>
					<AiOutlineClose />
				</div>
			)}
		</li>
	)
}

export default TechnologiesItem
