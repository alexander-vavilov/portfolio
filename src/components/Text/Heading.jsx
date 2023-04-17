import React from 'react'
import Label from './Label'
import Title from './Title'

const Heading = ({ label, title }) => {
	return (
		<div>
			<Label>{label}</Label>
			<Title>{title}</Title>
		</div>
	)
}

export default Heading
