import React from 'react'
import { useTranslation } from 'react-i18next'
import Label from '../Text/Label'
import BouncingTitle from './BouncingTitle'

const HeroDesc = () => {
	const { t } = useTranslation()

	return (
		<div className='max-w-xl'>
			<Label>{t('hero.label')}</Label>
			<BouncingTitle />
			<p className='leading-8 py-4 lg:py-6'>{t('hero.subtitle')}</p>
		</div>
	)
}

export default HeroDesc
