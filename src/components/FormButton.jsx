import React from 'react'

const FormButton = ({ text }) => {
	return (
		<button
			type='submit'
			aria-label={text}
			className='bg-ocean-300 text-white py-3 md:py-4 rounded-lg capitalize cursor-pointer'
		>
			{text}
		</button>
	)
}

export default FormButton
