import React, { useContext } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db, storage } from '../../../firebase'
import { useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useTranslation } from 'react-i18next'
import { AlertContext } from '../../../contexts/AlertContext'
import DashboardFormProgressbar from './DashboardFormProgressbar'
import DashboardFormTechnologies from './DashboardFormTechnologies'
import DashboardFormFileInput from './DashboardFormFileInput'
import FormButton from '../../FormButton'

const DashboardForm = () => {
	const [title, setTitle] = useState('')
	const [githubLink, setGithubLink] = useState('')
	const [link, setLink] = useState('')
	const [technologies, setTechnologies] = useState([])
	const [image, setImage] = useState(null)
	const { handleAlert } = useContext(AlertContext)
	const [progress, setProgress] = useState(0)
	const { t } = useTranslation()

	const handleSubmit = async e => {
		e.preventDefault()

		const storageRef = ref(storage, `works/${title.toLowerCase()}`)
		const uploadTask = uploadBytesResumable(storageRef, image)
		uploadTask.on(
			'state_changed',
			snapshot => {
				setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
			},
			error => {
				console.log(error)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(imageUrl => {
					setDoc(doc(db, 'works', title.toLowerCase()), {
						title,
						imageUrl,
						githubLink,
						link,
						technologies,
					})
						.then(() => {
							handleAlert({ message: 'The work was added successfully!' })
							setTitle('')
							setGithubLink('')
							setLink('')
							setTechnologies([])
							setImage(null)
							setProgress(0)
						})
						.catch(error => {
							console.log(error)
							handleAlert({ message: 'Oops..Something went wrong' })
						})
				})
			}
		)
	}

	return (
		<form
			onSubmit={e => handleSubmit(e)}
			className='flex flex-col gap-4 sm:gap-6 pt-8'
		>
			<input
				type='text'
				className='form-field'
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder={t('dashboard.form.title')}
				required={true}
			/>
			<input
				type='url'
				className='form-field'
				value={githubLink}
				onChange={e => setGithubLink(e.target.value)}
				placeholder={t('dashboard.form.githubLink')}
				required={true}
			/>
			<input
				type='url'
				className='form-field'
				value={link}
				onChange={e => setLink(e.target.value)}
				placeholder={t('dashboard.form.link')}
				required={true}
			/>
			<DashboardFormTechnologies
				technologies={technologies}
				setTechnologies={setTechnologies}
			/>
			<DashboardFormFileInput image={image} setImage={setImage} />
			<FormButton text={t('dashboard.form.button')} />
			<DashboardFormProgressbar progress={progress} />
		</form>
	)
}

export default DashboardForm
