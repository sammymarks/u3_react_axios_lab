import { Link, useNavigate } from "react-router-dom"


export default function StarshipList (props) {
    // console.log("starship props", props)
    // console.log(props.starshipList.length)
    const results = props.starshipList.results
    const nextURL = props.starshipList.next
    const previousURL = props.starshipList.previous
    // console.log("results", results)



    const handleClick = (url) => {
        props.setStarshipURL(url)
    }

    let navigate = useNavigate()

    const showCard = (item) => {
        navigate(`${item.name}`)
    }

    return (

        !results ? 
        <div className="cat-loading">
            <h2>Loading Ships</h2>
            <img src="https://upload.wikimedia.org/wikipedia/en/d/d9/ImperialstarDestroyer480ppx.png"/>
        </div> 
        :
        <div className="cat-container starship-container">
                <div className="cat-grid starship-grid">
                    {
                        results?.map((ship) => (
                            <div className="cat-card film-card" key={ship.name} onClick={() => showCard(ship)}>
                                <div className="cat-card-header"> {ship.model} </div>
                            </div>                    
                        ))
                    }
                </div>
                <div className="cat-container-btns">
                    {
                        previousURL ? <button className="cat-container-btns-previous" onClick={() => handleClick(previousURL)}>Previous</button> : null
                    }
                    {
                        nextURL ? <button className="cat-container-btns-next" onClick={() => handleClick(nextURL)}>Next</button> : null
                    }
                </div>
        
        </div>
             
    )
}



// if (nextURL || previousURL) {
//     return(
//         <div className="cat-container starship-container">
//             <div className="cat-grid starship-grid">
//                 {
//                     results.map((ship) => (
//                         <div className="cat-card film-card" key={ship.url}>
//                             <div className="cat-card-header"> {ship.model} </div>
//                         </div>                    
//                     ))
//                 }
//             </div>                    
//                 <div className="cat-container-btns">
//                     {
//                         if (previousURL) (<div>))
//                     }
//                     {
//                         if (nextURL) (return ())
//                     }
                    
//                 </div>
//             </div>
//     )
// } else {