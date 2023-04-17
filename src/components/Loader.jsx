import React from 'react'
import LoaderGif from '../assets/loader.gif'

const Loader = () => {
	return (
		<div className='w-screen h-screen flex justify-center items-center text-white text-xl'>
			<img src={LoaderGif} alt='loading...' />
		</div>
	)
}

export default Loader
