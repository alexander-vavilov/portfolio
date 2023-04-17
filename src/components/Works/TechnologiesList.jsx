import React from 'react'
import TechnologiesItem from './TechnologiesItem'

const TechnologiesList = ({
	technologies,
	handleRemoveTechnology,
	removable,
}) => {
	return (
		<ul className='flex flex-wrap gap-2'>
			{technologies?.map((technology, index) => (
				<TechnologiesItem
					key={technology}
					name={technology}
					onClick={() => handleRemoveTechnology(index)}
					removable={removable}
				/>
			))}
		</ul>
	)
}

export default TechnologiesList
