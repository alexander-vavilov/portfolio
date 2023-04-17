import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './i18n'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './contexts/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeContextProvider>
	</React.StrictMode>
)
