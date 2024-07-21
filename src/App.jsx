import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
  // State
  const [fact, setFact] = useState('')
  const [imageUrl, setUrl] = useState('')

  // Cat Fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
  }, [])

  // Cat Image
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    const newImageUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white`

    setUrl(newImageUrl)
  }, [fact])

  // Render
  return (
    <main>
      <h1>App de Gatitos</h1>
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
