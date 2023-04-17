import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DashboardForm from '../components/Dashboard/Form/DashboardForm'
import Login from '../components/Dashboard/Login'
import Heading from '../components/Text/Heading'
import WorksList from '../components/Works/WorksList'
import { auth } from '../firebase'

const Dashboard = () => {
	const [isAuth, setIsAuth] = useState(false)
	const { t } = useTranslation()

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			user && setIsAuth(true)
		})
	}, [])

	return isAuth ? (
		<div className='min-h-screen pt-[16vh] bg-zinc-100 dark:bg-neutral-900 transition-background'>
			<div className='container'>
				<Heading title={t('dashboard.title')} label={t('dashboard.label')} />
				<DashboardForm />
				<WorksList editable />
			</div>
		</div>
	) : (
		<Login setIsAuth={setIsAuth} />
	)
}

export default Dashboard
