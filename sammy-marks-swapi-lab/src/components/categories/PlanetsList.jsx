

export default function PlanetsList (props) {


    if (props.planetsList.length > 0) {
        return(
            <div className="cat-grid planets-grid">
                {
                    props.planetsList.map((planet) => (
                        <div className="cat-card planet-card" key={planet.url}>
                            <div className="cat-card-header"> Planet: {planet.name} </div>
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className="cat-loading">
                <h2>Loading Planets</h2>
                <img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"/>
            </div>        )
    }
    
}