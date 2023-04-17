import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { auth } from '../../firebase'
import FormButton from '../FormButton'

const Login = ({ setIsAuth }) => {
	const { t } = useTranslation()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				setIsAuth(true)
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<div className='flex justify-center items-center w-full min-h-screen'>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-2xl'>
				<input
					type='email'
					value={email}
					className='form-field bg-zinc-100 dark:bg-neutral-900'
					onChange={e => setEmail(e.target.value)}
					placeholder={t('dashboard.login.email')}
				/>
				<input
					type='password'
					value={password}
					className='form-field bg-zinc-100 dark:bg-neutral-900'
					onChange={e => setPassword(e.target.value)}
					placeholder={t('dashboard.login.password')}
				/>
				<FormButton text={t('dashboard.login.button')} />
			</form>
		</div>
	)
}

export default Login
