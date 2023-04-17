import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = () => {
	return (
		<div className='flex flex-col h-full bg-white dark:bg-neutral-800 text-slate-800 dark:text-zinc-100 transition-colors'>
			<Header />
			<main className='flex-auto'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
