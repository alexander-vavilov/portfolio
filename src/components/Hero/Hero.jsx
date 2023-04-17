import React from 'react'
import SocialLinks from './SocialLinks/SocialLinks'
import HeroDesc from './HeroDesc'
import HeroWebp from '../../assets/hero.webp'
import HeroPng from '../../assets/hero.png'

const Hero = () => {
	return (
		<section id='hero' className='flex min-h-screen max-h-max'>
			<div className='container flex flex-col-reverse md:flex-row md:justify-between items-center gap-7 py-24'>
				<div className='flex flex-col items-center sm:items-start text-center sm:text-start'>
					<HeroDesc />
					<SocialLinks />
				</div>
				<picture className='max-w-[404px] select-none'>
					<source srcSet={HeroWebp} type='image/webp' />
					<source srcSet={HeroPng} type='image/png' />
					<img src={HeroPng} alt='img' draggable={false} />
				</picture>
			</div>
		</section>
	)
}

export default Hero
