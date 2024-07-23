import { useEffect, useState } from 'react'

export function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState()

	// Cat Image
	useEffect(() => {
		if (!fact) return
		const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
		const newImageUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white`
		setImageUrl(newImageUrl)
	}, [fact])

	return { imageUrl }
}
