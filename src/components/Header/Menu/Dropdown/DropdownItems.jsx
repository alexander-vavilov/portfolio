import React from 'react'
import { langs } from '../../../../utils/consts'
import DropdownItem from './DropdownItem'

const DropdownItems = ({ dropdownIsOpen, setDropdownIsOpen }) => {
	return (
		<ul
			className={`${
				!dropdownIsOpen && 'opacity-0 invisible'
			} absolute left-1/2 -translate-x-1/2 bottom-full md:bottom-auto md:top-full flex flex-col flex-auto max-h-36 bg-slate-100 dark:bg-neutral-700 divide-y divide-slate-300 dark:divide-neutral-500 rounded-lg shadow-md overflow-auto z-10 transition-[background,_opacity,_visibility] duration-300`}
		>
			{langs.map(({ name, lang }) => (
				<DropdownItem
					key={lang}
					name={name}
					lang={lang}
					setDropdownIsOpen={setDropdownIsOpen}
				/>
			))}
		</ul>
	)
}

export default DropdownItems
