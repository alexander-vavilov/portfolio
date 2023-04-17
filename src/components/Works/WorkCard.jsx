import React from 'react'
import TechnologiesList from './TechnologiesList'
import { FaGithub } from 'react-icons/fa'
import TitleSmaller from '../Text/TitleSmaller'
import { BsFillTrashFill } from 'react-icons/bs'
import { doc, deleteDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { deleteObject, ref } from 'firebase/storage'

const WorkCard = props => {
	const handleDeleteDoc = () => {
		const name = props.title.toLowerCase()

		deleteDoc(doc(db, 'works', name))
		deleteObject(ref(storage, `works/${name}`))
	}

	return (
		<div className='relative rounded-lg overflow-hidden text-zinc-100 select-none'>
			<a href={props.link} className='cursor-pointer group' target='blank'>
				<img
					src={props.imageUrl}
					className='w-full h-52 object-cover object-center md:group-hover:scale-110 md:transition-transform md:duration-500'
					alt='img'
				/>
				<div className='absolute top-0 left-0 flex flex-col justify-between w-full h-full p-4 bg-black bg-opacity-70 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'>
					<object className='inline'>
						<a
							href={props.githubLink}
							className='inline opacity-70 hover:opacity-100 transition-opacity duration-300'
							target='blank'
						>
							<FaGithub size={28} />
						</a>
					</object>
					<div>
						<TitleSmaller className='pb-2 capitalize'>
							{props.title}
						</TitleSmaller>
						<TechnologiesList technologies={props.technologies} />
					</div>
				</div>
			</a>
			{props.editable && (
				<div className='absolute top-2 right-2'>
					<button
						onClick={handleDeleteDoc}
						className='p-2 bg-neutral-800 border-2 border-neutral-500 rounded-full hover:bg-neutral-600 transition-all duration-300'
					>
						<BsFillTrashFill className='text-xl text-red-500' />
					</button>
				</div>
			)}
		</div>
	)
}

export default WorkCard
