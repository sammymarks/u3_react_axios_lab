import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function StarshipDetails (props) {
    console.log("starshipList props:", props)

    let { name } = useParams()

    const [starship, setStarship] = useState('')

    useEffect(() => {
        const selectedStarship = props.starshipList.results.find((item) => item.name === name)
        setStarship(selectedStarship)
    }, [props.starshipList, name])

    return starship ? (
        <div className='detail-container'>
            <h1 className='detail-title'>{starship.name}</h1>
            <h2 className='detail-list-container'>Seen in:</h2>
            <ul>
                {
                    starship.films.map((filmURL) => {
                        const selectedFilm = props.filmsList.find((film)=> film.url == filmURL)
                        return (<li>Episode {selectedFilm.episode_id}: {selectedFilm.title}</li>)
                    })
                }
            </ul>
        </div>
    ) : null

}