import React from 'react'
import ContactForm from './ContactForm'
import ContactLinks from './ContactLinks'

const Contact = () => {
	return (
		<section
			id='contacts'
			className='bg-zinc-100 dark:bg-neutral-900 transition-background'
		>
			<div className='container flex flex-col md:flex-row justify-between md:items-center gap-16 py-16 md:py-24'>
				<ContactForm />
				<ContactLinks />
			</div>
		</section>
	)
}

export default Contact
