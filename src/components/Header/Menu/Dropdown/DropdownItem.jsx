import React from 'react'
import { useTranslation } from 'react-i18next'

const DropdownItem = ({ name, lang, setDropdownIsOpen }) => {
	const { i18n } = useTranslation()

	const changeLanguage = lang => {
		i18n.changeLanguage(lang)
		setDropdownIsOpen(false)
	}

	return (
		<li
			onClick={() => changeLanguage(lang)}
			className='first:rounded-t-lg last:rounded-b-lg hover:bg-slate-200 hover:dark:bg-neutral-600 px-8 py-1 transition-background cursor-pointer select-none'
		>
			{name}
		</li>
	)
}

export default DropdownItem
