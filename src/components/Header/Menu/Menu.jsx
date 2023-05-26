import React from 'react'
import MenuButtons from './MenuButtons'
import MenuItems from './MenuItems'

const Menu = ({ menuIsOpen, handleCloseMenu }) => {
	return (
		<nav
			className='flex-auto fixed md:static top-0 w-full md:w-auto h-[100dvh] md:h-auto transition-position duration-300'
			style={{ left: menuIsOpen ? '0' : '-100%' }}
		>
			<div className='flex flex-col md:flex-row items-center justify-between gap-9 md:gap-6 w-full h-full py-8 md:py-0 bg-white dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent shadow-xl md:shadow-none overflow-y-auto md:overflow-y-visible transition-background md:transition-none duration-300'>
				<MenuItems handleCloseMenu={handleCloseMenu} />
				<MenuButtons handleCloseMenu={handleCloseMenu} />
			</div>
		</nav>
	)
}

export default Menu
