import { createContext, useState } from 'react'
import { createPortal } from 'react-dom'
import Alert from '../components/Alert'

export const AlertContext = createContext(null)

export const AlertContextProvider = ({ children }) => {
	const [alerts, setAlerts] = useState([])

	const handleAlert = alert => {
		if (!alerts.includes(alert)) {
			setAlerts([...alerts, alert])
			setTimeout(() => setAlerts([]), 5000)
		}
	}

	const handleAlertClose = index => {
		setAlerts(alerts.filter((_, i) => i !== index))
	}

	return (
		<AlertContext.Provider value={{ handleAlert }}>
			{children}
			{alerts.length > 0 &&
				createPortal(
					<div className='fixed top-10 right-5 left-5 md:left-auto flex flex-col gap-4 z-50'>
						{alerts?.map((alert, index) => {
							return (
								<Alert
									message={alert.message}
									onRequestClose={() => handleAlertClose(index)}
								/>
							)
						})}
					</div>,
					document.getElementById('alert')
				)}
		</AlertContext.Provider>
	)
}
