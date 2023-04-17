import React, { useContext } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { ThemeContext } from '../../../contexts/ThemeContext'
import MenuButton from './MenuButton'
import { useTranslation } from 'react-i18next'

const ThemeToggler = ({ handleCloseMenu }) => {
	const { darkMode, setDarkMode } = useContext(ThemeContext)
	const { t } = useTranslation()

	const handleToggleTheme = () => {
		setDarkMode(!darkMode)
		localStorage.setItem('darkMode', !darkMode)
		handleCloseMenu()
	}

	return (
		<MenuButton
			ariaLabel={t('header.buttons.toggleTheme')}
			onClick={handleToggleTheme}
		>
			{darkMode ? <BiSun size={28} /> : <BiMoon size={28} />}
		</MenuButton>
	)
}

export default ThemeToggler
