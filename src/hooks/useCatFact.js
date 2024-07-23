import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
	// State
	const [fact, setFact] = useState()

	// Utils
	const refreshRandomFact = () => {
		getRandomFact().then((newFact) => setFact(newFact))
	}

	// Cat Fact
	useEffect(refreshRandomFact, [])

	return { fact, refreshRandomFact }
}
