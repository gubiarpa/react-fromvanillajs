import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(({ fact }) => {
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    const newUrl = encodeURI(`https://cataas.com/cat/says/${threeFirstWords}`)
    setImageUrl(newUrl)
  }, [fact])

  return (
    <main>
      <h1>Kitty's app</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three word of ${fact}`} />}
      </section>
    </main>
  )
}
