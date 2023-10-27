

export default function PlanetsList (props) {


    if (props.planetsList.length > 0) {
        return(
            <div className="planets-grid">
                {
                    props.planetsList.map((planet) => (
                        <div key={planet.url}> Planet: {planet.name} </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>Waiting for planets</div>
        )
    }
    
}