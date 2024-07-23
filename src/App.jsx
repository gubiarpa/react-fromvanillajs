import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

import './App.css'

export function App() {
	// State
	const { fact, refreshRandomFact } = useCatFact()
	const { imageUrl } = useCatImage({ fact })

	// Handlers
	const handleClick = () => refreshRandomFact()

	// Render
	return (
		<main>
			<h1>App de Gatitos</h1>
			<button onClick={handleClick}>Get new fact</button>
			{fact && <p>{fact}</p>}
			<section>
				{imageUrl && (
					<img
						src={imageUrl}
						alt={`Intento de poner imagen para ${fact}`}
					/>
				)}
			</section>
		</main>
	)
}
