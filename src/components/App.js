// create your App component here
import React, { useEffect } from 'react'

const App = () => {
    const [doggo, setDoggo] = useEffect(null)
    const [loading, setLoading] = useEffect(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data)=> {
            setDoggo(data.message)
            setLoading(true)
        })
    }, [])
  return (
    <div>
        {loading ? (
            <img src={doggo}/>
        ) : (<p>Loading...</p>)}
    </div>
  )
}

export default App 