

export default function SpeciesList (props) {


    if (props.speciesList.length > 0) {
        return(
            <div className="cat-grid species-grid">
                {
                    props.speciesList.map((species) => (
                        <div className="cat-card species-card" key={species.url}>
                            <div className="cat-card-header"> Species: {species.name} </div>
                        </div>
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className="cat-loading">
                <h2>Loading Species</h2>
                <img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Wicket_W_Warrick.png"/>
            </div>
        )
    }
    
}