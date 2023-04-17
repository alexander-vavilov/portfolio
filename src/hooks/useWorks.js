import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

const useWorks = () => {
	const [works, setWorks] = useState([])

	useEffect(() => {
		const unsub = onSnapshot(collection(db, 'works'), snapshot => {
			const worksArr = []

			snapshot.docs.forEach(doc => {
				worksArr.push({ title: doc.id, ...doc.data() })
			})
			setWorks(worksArr)
		})

		return () => {
			unsub()
		}
	}, [])

	return { works, setWorks }
}

export default useWorks
