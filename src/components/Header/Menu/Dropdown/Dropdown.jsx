import React, { useEffect, useRef, useState } from 'react'
import { IoLanguageOutline } from 'react-icons/io5'
import MenuButton from '../MenuButton'
import DropdownItems from './DropdownItems'
import { useTranslation } from 'react-i18next'

const Dropdown = () => {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
	const dropdownRef = useRef(null)
	const { t } = useTranslation()

	useEffect(() => {
		const handleClickAway = e => {
			if (dropdownIsOpen && !dropdownRef.current.contains(e.target)) {
				setDropdownIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickAway)

		return () => {
			document.removeEventListener('mousedown', handleClickAway)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dropdownIsOpen])

	return (
		<div className='relative' ref={dropdownRef}>
			<MenuButton
				ariaLabel={t('header.buttons.changeLang')}
				onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
				isOpen={dropdownIsOpen}
			>
				<IoLanguageOutline size={28} />
			</MenuButton>
			<DropdownItems
				dropdownIsOpen={dropdownIsOpen}
				setDropdownIsOpen={setDropdownIsOpen}
			/>
		</div>
	)
}

export default Dropdown
