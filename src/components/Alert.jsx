import React from 'react'

const Alert = ({ message, onRequestClose }) => {
	return (
		<div
			key={message}
			className='flex flex-col gap-4 w-auto md:w-96 p-4 bg-zinc-300 dark:bg-neutral-600 rounded-lg transition-all duration-500 overflow-hidden'
		>
			<div className='flex justify-between items-center gap-4'>
				<span className='flex-auto text-neutral-800 dark:text-zinc-100 text-md sm:text-lg'>
					{message}
				</span>
				<button
					type='button'
					onClick={onRequestClose}
					className='relative w-5 h-5 cursor-pointer'
				>
					<div className='absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-white rotate-45' />
					<div className='absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-white -rotate-45' />
				</button>
			</div>
			<div className='absolute bottom-0 left-0 h-2 bg-green-500' />
			{/* progressbar */}
		</div>
	)
}

export default Alert
