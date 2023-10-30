import { Route,Routes } from "react-router-dom"

import Home from "./Home"
import FilmsList from "./categories/FilmsList"
import PeopleList from "./categories/PeopleList"
import PlanetsList from "./categories/PlanetsList"
import SpeciesList from "./categories/SpeciesList"
import VehiclesList from "./categories/VehiclesList"
import StarshipList from "./categories/StarshipList"
import StarshipDetails from "./categories/StarshipDetails"



export default function Main (props) {
    // console.log("Main Props", props)
    return(
        <div className="Main">
            {/* <h1>This is Main</h1> */}
            <div className="routes-container">
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/films" element={<FilmsList filmsList={props.filmsList}/>} />
                    <Route path="/people" element={<PeopleList 
                        peopleList={props.peopleList}
                        peopleLoading={props.peopleLoading}
                        loadingState={props.loadingState}
                        />} 
                    />
                    <Route path="/planets" element={<PlanetsList planetsList={props.planetsList}/>} />
                    <Route path="/species" element={<SpeciesList speciesList={props.speciesList}/>} />
                    
                    {/* STARSHIPS */}
                    <Route path="/starships" 
                        element={<StarshipList 
                            starshipList={props.starshipList} 
                            setStarshipURL={props.setStarshipURL}
                            getStarshipsList={props.getStarshipsList}
                            loadingState={props.loadingState}
                        />} 
                    />
                    <Route path="/starships/:name" 
                        element={<StarshipDetails 
                            starshipList={props.starshipList} 
                            filmsList={props.filmsList}
                        />} 
                    />

                    <Route path="/vehicles" element={<VehiclesList vehiclesList={props.vehiclesList}/>} />
                </Routes>
            </div>
        </div>
    )
}