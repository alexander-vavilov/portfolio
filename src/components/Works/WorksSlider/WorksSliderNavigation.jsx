import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const WorksSliderNavigation = ({ navigationPrevRef, navigationNextRef }) => {
	const navigationButtons = [
		{
			ref: navigationPrevRef,
			icon: IoIosArrowBack,
		},
		{
			ref: navigationNextRef,
			icon: IoIosArrowForward,
		},
	]

	return (
		<div className='flex justify-end gap-4 pt-7 pr-4 lg:pr-0 select-none'>
			{navigationButtons.map(({ ref, icon }) => {
				const Icon = icon

				return (
					<div
						key={icon}
						ref={ref}
						className='flex p-2 rounded-2xl bg-ocean-200 cursor-pointer'
					>
						<Icon size={24} className='text-ocean-300' />
					</div>
				)
			})}
		</div>
	)
}

export default WorksSliderNavigation
