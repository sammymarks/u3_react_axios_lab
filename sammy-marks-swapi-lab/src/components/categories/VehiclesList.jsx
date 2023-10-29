

export default function VehiclesList (props) {


    if (props.vehiclesList.length > 0) {
        return(
            <div className="cat-grid vehicles-grid">
                {
                    props.vehiclesList.map((vehicle) => (
                        <div className="cat-card vehicle-card" key={vehicle.url}>
                            <div className="cat-card-header"> {vehicle.model} </div>
                        </div>                    
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className="cat-loading">
                <h2>Loading Vehicles</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Diorama_AT-AT.png"/>
            </div>        
        )
    }
    
}