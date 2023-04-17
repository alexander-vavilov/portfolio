import React from 'react'
import useWorks from '../../hooks/useWorks'
import WorkCard from './WorkCard'
import WorkCardSkeleton from './WorkCardSkeleton'

const WorksList = ({ editable }) => {
	const { works } = useWorks()

	return (
		<div className='grid grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))] gap-3 py-4'>
			{works.length ? (
				works.map(({ title, imageUrl, link, githubLink, technologies }) => (
					<WorkCard
						key={title}
						imageUrl={imageUrl}
						title={title}
						link={link}
						githubLink={githubLink}
						technologies={technologies}
						editable={editable}
					/>
				))
			) : (
				<WorkCardSkeleton />
			)}
		</div>
	)
}

export default WorksList
