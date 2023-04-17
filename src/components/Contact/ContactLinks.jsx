import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
import ContactLink from './ContactLink'

const ContactLinks = () => {
	const { t } = useTranslation()
	const contactLinks = [
		{
			title: t('contacts.links.telegram'),
			subtitle: '@hittttau',
			icon: FaTelegramPlane,
			path: 'https://t.me/Hittttau',
		},
		{
			title: t('contacts.links.phoneNumber'),
			subtitle: '(981) 977-3055',
			icon: FiPhoneCall,
			path: 'tel:9819773055',
		},
		{
			title: t('contacts.links.email'),
			subtitle: 'maksimsraud@gmail.com',
			icon: MdOutlineMailOutline,
			path: 'https://gmail.com',
		},
	]

	return (
		<ul className='flex flex-col gap-6 md:gap-8 lg:gap-12'>
			{contactLinks.map(({ icon, title, subtitle, path }) => {
				return (
					<ContactLink
						key={path}
						title={title}
						subtitle={subtitle}
						icon={icon}
						path={path}
					/>
				)
			})}
		</ul>
	)
}

export default ContactLinks
