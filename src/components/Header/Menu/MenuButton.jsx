import React from 'react'

const MenuButton = ({ children, onClick, ariaLabel, isOpen }) => {
	return (
		<button
			onClick={onClick}
			aria-label={ariaLabel}
			className={`flex justify-center items-center p-2 rounded-lg bg-zinc-400 ${
				isOpen ? 'bg-opacity-25' : 'bg-opacity-0 button-non-touchable-hover'
			} text-neutral-800 dark:text-white transition-colors duration-300`}
		>
			{children}
		</button>
	)
}

export default MenuButton
