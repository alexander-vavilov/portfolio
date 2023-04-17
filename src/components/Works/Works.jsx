import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosArrowForward } from 'react-icons/io'
import Heading from '../Text/Heading'
import NavigationLink from './NavigationLink'
import WorksSlider from './WorksSlider/WorksSlider'

const Works = () => {
	const { t } = useTranslation()

	return (
		<section
			id='works'
			className='bg-white dark:bg-neutral-800 transition-background'
		>
			<div className='container py-16 md:py-28'>
				<div className='flex justify-between items-center'>
					<Heading label={t('works.label')} title={t('works.title')} />
					<NavigationLink to='works'>
						<span>more</span>
						<IoIosArrowForward size={20} />
					</NavigationLink>
				</div>
				<div className='-mx-4 pl-4 sm:pr-4 md:pr-0 lg:pr-4 pt-12 lg:pt-20'>
					<WorksSlider />
				</div>
			</div>
		</section>
	)
}

export default Works
