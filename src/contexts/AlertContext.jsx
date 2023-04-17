import { createContext, useState } from 'react'

export const AlertContext = createContext(null)

export const AlertContextProvider = ({ children }) => {
	const [alerts, setAlerts] = useState([])

	const handleAlert = alert => {
		if (!alerts.includes(alert)) {
			setAlerts([...alerts, alert])
			setTimeout(() => setAlerts([]), 5000)
		}
	}

	const handleAlertRemove = index => {
		setAlerts(alerts.filter((_, i) => i !== index))
	}

	return (
		<AlertContext.Provider value={{ handleAlert }}>
			{children}
			<div
				role='alert'
				className={`fixed top-10 right-5 left-5 md:left-auto flex flex-col gap-4 z-50`}
			>
				{alerts?.map((alert, index) => {
					return (
						<div
							key={alert.message}
							className='flex flex-col gap-4 w-auto md:w-96 p-4 bg-zinc-300 dark:bg-neutral-600 rounded-lg transition-all duration-500 overflow-hidden'
						>
							<div className='flex justify-between items-center gap-4'>
								<span className='flex-auto text-neutral-800 dark:text-zinc-100 text-md sm:text-lg'>
									{alert.message}
								</span>
								<button
									type='button'
									onClick={() => handleAlertRemove(index)}
									className='relative w-5 h-5 cursor-pointer'
								>
									<div className='absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-white rotate-45' />
									<div className='absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-white -rotate-45' />
								</button>
							</div>
							<div className='absolute bottom-0 left-0 h-2 bg-green-500' />{' '}
							{/* progressbar */}
						</div>
					)
				})}
			</div>
		</AlertContext.Provider>
	)
}
