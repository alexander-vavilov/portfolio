import React from 'react'

const Title = ({ children }) => {
	return (
		<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold font-jakarta break-words capitalize'>
			{children}
		</h2>
	)
}

export default Title
