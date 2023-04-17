import React, { useContext, useRef } from 'react'
import { AlertContext } from '../../contexts/AlertContext'
import { useForm } from '@formspree/react'
import { useTranslation } from 'react-i18next'
import FormButton from '../FormButton'

const ContactForm = () => {
	const { handleAlert } = useContext(AlertContext)
	const [state, handleSending] = useForm(process.env.REACT_APP_FORMSPREE)
	const formRef = useRef(null)
	const { t } = useTranslation()

	const handleSubmit = e => {
		e.preventDefault()

		if (state.errors.length) {
			handleAlert(...state.errors)
		} else {
			handleSending(e)
				.then(() => {
					formRef?.current.reset()
					handleAlert({ message: 'The message was sent successfully!' })
				})
				.catch(error => {
					console.error(error)
					handleAlert({ message: 'Oops...Something went wrong.' })
				})
		}
	}

	return (
		<form
			ref={formRef}
			action='#'
			onSubmit={handleSubmit}
			className='flex flex-col flex-auto gap-4 sm:gap-6 md:max-w-2xl'
		>
			<input
				type='text'
				name='name'
				className='form-field'
				placeholder={t('contacts.form.name')}
			/>
			<input
				type='email'
				name='email'
				required
				className='form-field'
				placeholder={t('contacts.form.email')}
			/>
			<textarea
				type='text'
				name='message'
				required
				className='min-h-[56px] h-48 form-field'
				placeholder={t('contacts.form.message')}
			/>
			<FormButton text={t('contacts.form.button')} />
		</form>
	)
}

export default ContactForm
