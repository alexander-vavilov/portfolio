import { createContext, useState } from 'react'

const getCurrentTheme = () => {
	if (localStorage.getItem('darkMode') !== null) {
		return localStorage.getItem('darkMode') === 'true'
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const ThemeContext = createContext(null)

export const ThemeContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(getCurrentTheme())

	return (
		<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</ThemeContext.Provider>
	)
}
