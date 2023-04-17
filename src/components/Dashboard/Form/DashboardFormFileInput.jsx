import React from 'react'
import { BsFillImageFill } from 'react-icons/bs'
import { useState } from 'react'

const DashboardFormFileInput = ({ image, setImage }) => {
	const [isDragging, setIsDragging] = useState(false)

	const handleDragEnter = e => {
		e.preventDefault()
		setIsDragging(true)
	}
	const handleDragLeave = e => {
		e.preventDefault()
		setIsDragging(false)
	}
	const handleDrop = e => {
		e.preventDefault()
		setImage(e.dataTransfer.files[0])
		setIsDragging(false)
	}

	return (
		<div>
			<input
				type='file'
				accept='image/*'
				className='absolute w-0 opacity-0 -z-10'
				id='image'
				onChange={e => setImage(e.target.files[0])}
				required
			/>
			<label
				htmlFor='image'
				className='relative flex justify-center items-center p-5 border-2 border-neutral-600 border-dashed rounded-lg cursor-pointer overflow-hidden'
				onDragEnter={e => handleDragEnter(e)}
				onDragLeave={e => handleDragLeave(e)}
				onDragOver={e => e.preventDefault()}
				onDrop={e => handleDrop(e)}
			>
				<div className='flex flex-col justify-center items-center gap-2 pointer-events-none'>
					<BsFillImageFill size={38} />
					{image ? (
						<span>{image.name}</span>
					) : (
						<div className='flex flex-col items-center'>
							<span>Drag and drop to upload</span>
							<span className='text-zinc-300'>
								or <span className='underline'>browse</span>
							</span>
						</div>
					)}
				</div>
				{isDragging && (
					<div className='absolute flex justify-center items-center w-full h-full bg-black/80 pointer-events-none'>
						<span className='text-2xl'>Drop image here</span>
					</div>
				)}
			</label>
		</div>
	)
}

export default DashboardFormFileInput
