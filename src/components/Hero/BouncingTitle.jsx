import React from 'react'
import { useTranslation } from 'react-i18next'

const BouncingTitle = () => {
	const { t } = useTranslation()
	const generalTitleObj = t('hero.title.general', { returnObjects: true })
	const highlightedTitleObj = t('hero.title.highlighted', {
		returnObjects: true,
	})

	return (
		<h1 className='relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-jakarta sm:py-2 cursor-default'>
			{generalTitleObj.map(({ name, id }) => (
				<span
					key={id}
					className='inline-block text-neutral-800 dark:text-zinc-100 hover:text-ocean-300 dark:hover:text-ocean-300 transition-colors'
					onMouseEnter={e => e.target.classList.add('bouncing')}
					onAnimationEnd={e => e.target.classList.remove('bouncing')}
				>
					{name}
				</span>
			))}
			&nbsp;
			{highlightedTitleObj.map(({ name, id }) => (
				<span
					key={id}
					className='inline-block text-ocean-300 hover:text-slate-800 hover:dark:text-white transition-colors'
					onMouseEnter={e => e.target.classList.add('bouncing')}
					onAnimationEnd={e => e.target.classList.remove('bouncing')}
				>
					{name}
				</span>
			))}
		</h1>
	)
}

export default BouncingTitle
