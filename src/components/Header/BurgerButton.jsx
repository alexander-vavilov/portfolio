import React from 'react'

const BurgerButton = ({ menuIsOpen, handleToggleMenu }) => {
	return (
		<div
			className='md:hidden w-10 h-10 py-2 px-1 z-40 cursor-pointer'
			onClick={handleToggleMenu}
		>
			<div className='w-full h-full relative'>
				<div
					className={`absolute ${
						menuIsOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
					} w-full h-0.5 bg-neutral-800 dark:bg-white rounded-full transition-all duration-300`}
				/>
				<div
					className={`absolute top-1/2 ${
						menuIsOpen && 'scale-0'
					} -translate-y-1/2 w-full h-0.5 bg-neutral-800 dark:bg-white rounded-full transition-all duration-300`}
				/>
				<div
					className={`absolute ${
						menuIsOpen ? '-rotate-45 bottom-1/2 translate-y-1/2' : 'bottom-0'
					} w-full h-0.5 bg-neutral-800 dark:bg-white rounded-full transition-all duration-300`}
				/>
			</div>
		</div>
	)
}

export default BurgerButton
