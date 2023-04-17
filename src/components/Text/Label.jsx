import React from 'react'

const Label = ({ children }) => {
	return (
		<span className='inline-flex justify-center items-center gap-2 text-xs font-medium text-cinder-100 dark:text-zinc-100/60 pb-2 uppercase tracking-[0.45rem] duration-300 before:block before:w-4 before:h-0.5 before:bg-cinder-100 before:dark:bg-zinc-100/60 before:duration-300'>
			{children}
		</span>
	)
}

export default Label
