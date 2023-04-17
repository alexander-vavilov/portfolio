import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown'
import ThemeToggler from './ThemeToggler'

const MenuButtons = ({ handleCloseMenu }) => {
	const { t } = useTranslation()

	return (
		<div className='flex gap-2 lg:gap-3'>
			<Dropdown />
			<ThemeToggler handleCloseMenu={handleCloseMenu} />
			<Link
				to='/#contacts'
				aria-label={t('header.buttons.contact')}
				onClick={handleCloseMenu}
				className='hover:bg-neutral-800 hover:dark:bg-zinc-100 hover:text-zinc-100 hover:dark:text-neutral-800 text-neutral-800 dark:text-zinc-100 text-sm font-medium capitalize py-3 px-6 border border-zinc-300 rounded-lg transition-colors'
			>
				{t('header.buttons.contact')}
			</Link>
		</div>
	)
}

export default MenuButtons
