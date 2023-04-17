import React from 'react'
import { useTranslation } from 'react-i18next'
import Heading from '../Text/Heading'
import Cards from './Cards/Cards'

const Services = () => {
	const { t } = useTranslation()

	return (
		<section
			id='services'
			className='bg-zinc-100 dark:bg-neutral-900 transition-background'
		>
			<div className='container py-16 md:py-28'>
				<Heading label={t('services.label')} title={t('services.title')} />
				<Cards />
			</div>
		</section>
	)
}

export default Services
