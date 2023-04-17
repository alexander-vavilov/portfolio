import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Lazy, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import WorksSliderNavigation from './WorksSliderNavigation'
import WorkCard from '../WorkCard'
import WorkCardSkeleton from '../WorkCardSkeleton'
import useWorks from '../../../hooks/useWorks'

const WorksSlider = () => {
	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)
	const { works } = useWorks()

	return (
		<Swiper
			modules={[Navigation, Lazy, Autoplay]}
			spaceBetween={15}
			slidesPerView={1.1}
			navigation={{
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			}}
			onBeforeInit={swiper => {
				swiper.params.navigation.prevEl = navigationPrevRef.current
				swiper.params.navigation.nextEl = navigationNextRef.current
			}}
			loop={true}
			lazy={{
				loadPrevNext: true,
				loadPrevNextAmount: 2,
			}}
			breakpoints={{
				475: {
					slidesPerView: 1.5,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2.5,
				},
				1024: {
					spaceBetween: 32,
					slidesPerView: 3,
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 3,
				},
			}}
		>
			{works.length ? (
				works.map(({ title, imageUrl, link, githubLink, technologies }) => (
					<SwiperSlide key={title}>
						<WorkCard
							imageUrl={imageUrl}
							title={title}
							link={link}
							githubLink={githubLink}
							technologies={technologies}
						/>
					</SwiperSlide>
				))
			) : (
				<SwiperSlide>
					<WorkCardSkeleton />
				</SwiperSlide>
			)}

			<WorksSliderNavigation
				navigationPrevRef={navigationPrevRef}
				navigationNextRef={navigationNextRef}
			/>
		</Swiper>
	)
}

export default WorksSlider
