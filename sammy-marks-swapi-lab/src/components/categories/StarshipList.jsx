

export default function StarshipList (props) {
    console.log("starship props", props)
    console.log(props.starshipList.length)

    if (props.starshipList.length > 0) {
        return(
            <div className="starship-grid">
                {
                    props.starshipList.map((ship) => (
                        <div key={ship.url}> Model: {ship.model} </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div>Waiting for Starships</div>
        )
    }
    
}