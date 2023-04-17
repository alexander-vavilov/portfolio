import React, { useEffect, useState } from 'react'
import BurgerButton from './BurgerButton'
import Logo from './Logo'
import Menu from './Menu/Menu'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleToggleMenu = () => {
		setMenuIsOpen(!menuIsOpen)
		document.body.style.overflowY = menuIsOpen ? 'auto' : 'hidden'
	}
	const handleCloseMenu = () => {
		setMenuIsOpen(false)
		document.body.style.overflowY = 'auto'
	}

	return (
		<header
			className={`fixed w-full ${
				isScrolled &&
				'bg-zinc-200/60 dark:bg-neutral-900/60 shadow-lg dark:shadow-md'
			} backdrop-blur-xl transition-visual z-10`}
		>
			<div
				className={`container flex justify-center items-center gap-6 ${
					isScrolled ? 'py-1 sm:py-3' : 'py-4 sm:py-6 md:py-8 lg:py-10'
				} transition-spacing duration-300`}
			>
				<Logo />
				<Menu menuIsOpen={menuIsOpen} handleCloseMenu={handleCloseMenu} />
				<BurgerButton
					menuIsOpen={menuIsOpen}
					handleToggleMenu={handleToggleMenu}
				/>
			</div>
		</header>
	)
}

export default Header
