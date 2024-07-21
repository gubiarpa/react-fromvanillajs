import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'

import './App.css'

export function App() {
  // State
  const [fact, setFact] = useState('')
  const [imageUrl, setUrl] = useState('')

  // Cat Fact
  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact))
  }, [])

  // Cat Image
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    const newImageUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white`

    setUrl(newImageUrl)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

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
