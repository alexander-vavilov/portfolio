import React from 'react'
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem'

const MenuItems = ({ handleCloseMenu }) => {
	const { t } = useTranslation()

	const menuItems = [
		{
			name: t('header.menu.services'),
			path: '/#services',
		},
		{
			name: t('header.menu.works'),
			path: '/#works',
		},
		{
			name: t('header.menu.contacts'),
			path: '/#contacts',
		},
	]

	return (
		<ul className='flex flex-col md:flex-row flex-auto justify-center md:justify-start gap-7 lg:gap-14 text-center md:text-start'>
			{menuItems.map(({ name, path }) => (
				<MenuItem
					key={path}
					name={name}
					path={path}
					handleCloseMenu={handleCloseMenu}
				/>
			))}
		</ul>
	)
}

export default MenuItems
