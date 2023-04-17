import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiMonitor } from 'react-icons/fi'
import { MdLanguage } from 'react-icons/md'
import { RiVipCrownLine } from 'react-icons/ri'
import Card from './Card'

const Cards = () => {
	const { t } = useTranslation()
	const cards = [
		{
			icon: RiVipCrownLine,
			title: t('services.cards.firstCard.title'),
			subtitle: t('services.cards.firstCard.subtitle'),
		},
		{
			icon: FiMonitor,
			title: t('services.cards.secondCard.title'),
			subtitle: t('services.cards.secondCard.subtitle'),
		},
		{
			icon: MdLanguage,
			title: t('services.cards.thirdCard.title'),
			subtitle: t('services.cards.thirdCard.subtitle'),
		},
	]

	return (
		<div className='grid grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))] gap-5 md:gap-9 lg:gap-14 pt-12 lg:pt-20'>
			{cards.map(({ icon, title, subtitle }) => (
				<Card key={title} icon={icon} title={title} subtitle={subtitle} />
			))}
		</div>
	)
}

export default Cards
