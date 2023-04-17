import React from 'react'
import WorksList from '../components/Works/WorksList'
import { IoIosArrowBack } from 'react-icons/io'
import NavigationLink from '../components/Works/NavigationLink'

const Works = () => {
	return (
		<div className='min-h-screen py-[16vh]'>
			<div className='container'>
				<NavigationLink to={-1}>
					<IoIosArrowBack size={20} />
					<span>back</span>
				</NavigationLink>
				<WorksList />
			</div>
		</div>
	)
}

export default Works
