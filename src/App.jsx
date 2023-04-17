import React, { Suspense, useContext } from 'react'
import Home from './pages/Home'
import Loader from './components/Loader'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { ThemeContext } from './contexts/ThemeContext'
import Works from './pages/Works'
import { AlertContextProvider } from './contexts/AlertContext'
import Dashboard from './pages/Dashboard'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
	const { darkMode } = useContext(ThemeContext)

	return (
		<Suspense fallback={<Loader />}>
			<div className={`h-full ${darkMode ? 'dark' : 'light'}`}>
				<AlertContextProvider>
					<ScrollToTop />
					<Routes>
						<Route element={<Layout />}>
							<Route index element={<Home />} />
							<Route path='/works' element={<Works />} />
							<Route path='/dashboard' element={<Dashboard />} />
						</Route>
					</Routes>
				</AlertContextProvider>
			</div>
		</Suspense>
	)
}

export default App
