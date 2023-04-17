import React from 'react'
import { BiCodeAlt } from 'react-icons/bi'

const Logo = () => {
	return (
		<a href='/#hero' className='flex flex-auto items-center gap-2 py-2'>
			<div className='flex justify-center items-center bg-neutral-800 dark:bg-white text-white dark:text-neutral-800 p-1.5 sm:p-2 rounded-full duration-300'>
				<BiCodeAlt size={28} />
			</div>
			<span className='text-2xl font-jakarta font-bold tracking-tight'>
				Alex.
			</span>
		</a>
	)
}

export default Logo
