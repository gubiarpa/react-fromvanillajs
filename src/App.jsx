import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const updateFact = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(({ fact }) => {
        setFact(fact)
      })
  }

  useEffect(() => {
    updateFact()
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    const newUrl = encodeURI(`https://cataas.com/cat/says/${threeFirstWords}`)
    setImageUrl(newUrl)
  }, [fact])

  const handleClick = () => {
    updateFact()
  }

  return (
    <main>
      <h1>Kitty's app</h1>
      <button onClick={handleClick}>New fact</button>
      <section>
        {fact && <p className='fact'>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three word of ${fact}`} />}
      </section>
    </main>
  )
}
