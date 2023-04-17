import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsPlus } from 'react-icons/bs'
import { AlertContext } from '../../../contexts/AlertContext'
import TechnologiesList from '../../Works/TechnologiesList'

const DashboardFormTechnologies = ({ technologies, setTechnologies }) => {
	const [technology, setTechnology] = useState('')
	const { handleAlert } = useContext(AlertContext)
	const { t } = useTranslation()

	const handleAddTechnology = () => {
		if (technologies?.includes(technology)) {
			return handleAlert({
				message: 'There cannot be two identical technologies!',
			})
		}

		if (technology) {
			setTechnologies(prevState => [...prevState, technology])
			setTechnology('')
		}
	}

	const handleRemoveTechnology = index => {
		setTechnologies(technologies?.filter((_, i) => i !== index))
	}

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault()
			handleAddTechnology()
		}

		if (!technology && e.key === 'Backspace') {
			setTechnologies(technologies => technologies.slice(0, -1))
		}
	}

	return (
		<>
			<div
				className='relative flex items-center bg-neutral-800 rounded-lg'
				style={{ paddingLeft: technologies.length && '8px' }}
			>
				<div className='basis-1/2 max-w-max hidden md:block py-2'>
					<TechnologiesList
						technologies={technologies}
						handleRemoveTechnology={handleRemoveTechnology}
						removable
					/>
				</div>
				<input
					type='text'
					className='form-field w-full h-full'
					value={technology}
					onChange={e => setTechnology(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder={t('dashboard.form.technologies')}
				/>
				<div
					onClick={handleAddTechnology}
					className='absolute top-1/2 -translate-y-1/2 right-5 text-4xl cursor-pointer'
				>
					<BsPlus />
				</div>
			</div>
			<div className='md:hidden'>
				<TechnologiesList
					technologies={technologies}
					handleRemoveTechnology={handleRemoveTechnology}
					removable
				/>
			</div>
		</>
	)
}

export default DashboardFormTechnologies
