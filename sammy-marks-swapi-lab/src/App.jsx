import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import { BASE_URL } from './globals'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [loadingState, setLoadingState] = useState(false)

  const [filmsList, setFilmsList] = useState([])
  
  const [peopleList, setPeopleList] = useState([])
  const [peopleLoading, setPeopleLoading] = useState(false)



  const [planetsList, setPlanetsList] = useState([])
  const [speciesList, setSpeciesList] = useState([])

  const [starshipList, setStarshipList] = useState([])
  const [starshipURL, setStarshipURL] = useState(`${BASE_URL}starships/`)
  const [starshipResults, setStarshipResults] = useState([])
  const [starshipNext, setStarshipNext] = useState([])

  const [vehiclesList, setVehiclesList] = useState([])

//Axios functions
  const getStarshipsList = async() => {
    //----WORKING SINGLE PAGE PULL----
    setStarshipList([])
    const starshipPage = await axios.get(starshipURL)
    setStarshipList(starshipPage.data)
    
  }

  useEffect(() => {
    setLoadingState(true)
    //Films
    const getFilmsList = async() => {
      const filmsPage1 = await axios.get(`${BASE_URL}films/`)
      setFilmsList(filmsPage1.data.results)
    }
    getFilmsList()

    //People
    const getPeopleList = async() => {
      const allPeople = []
      
      const swapiGetCategory = async (url) => {
        const response = await axios.get(url)
        console.log(url, response.data.results)
        allPeople.push(...response.data.results)
        if (response.data.next) {
          swapiGetCategory(response.data.next)
        } else {
          setPeopleLoading(false)
        }
        console.log("allPeople", allPeople)
        // setPeopleList(allPeople)
      }

      swapiGetCategory(`${BASE_URL}people/`)
      // console.log("allPeople", allPeople)
      setPeopleList(allPeople)


    }
    // getPeopleList().then(setLoadingState(false))

    //Planets
    const getPlanetsList = async() => {
      const planetsPage1 = await axios.get(`${BASE_URL}planets/`)
      setPlanetsList(planetsPage1.data.results)
    }
    getPlanetsList()

    //Species
    const getSpeciesList = async() => {
      const speciesPage1 = await axios.get(`${BASE_URL}species/`)
      setSpeciesList(speciesPage1.data.results)
    }
    getSpeciesList()

    //Starships
    
    getStarshipsList()
    // console.log("starshipResults:", starshipResults)
    
    //Vehicles
    const getVehiclesList = async() => {
      const vehiclesPage1 = await axios.get(`${BASE_URL}vehicles/`)
      setVehiclesList(vehiclesPage1.data.results)
    }
    getVehiclesList()
    
    //Hide loading state
    

  },[starshipURL])

  console.log("peopleList", peopleList)


  return (
    <div className='App'>
      <Header />
      <Main 
        loadingState={loadingState}
        
        filmsList={filmsList}

        peopleList={peopleList}
        peopleLoading={peopleLoading}

        planetsList={planetsList}
        speciesList={speciesList}
        
        starshipList={starshipList}
        setStarshipURL={setStarshipURL}
        getStarshipsList={getStarshipsList}
        

        vehiclesList={vehiclesList}
      />
    </div>
    )
  // )
}

export default App


// const getStarships = () => {
      
//       // const updateStarshipArray = async (array) => {
//       //   starshipArray.concat(array)
//       // }

//       const swapiGetCategory = async (url) => {
//         console.log('url', url)
//         const response = await axios.get(url)
//         console.log(url, response.data.results)
//         let placeholder = starshipResults
//         placeholder.concat(response.data.results)
//         setStarshipResults(placeholder)
//         // setStarshipResults([...starshipResults,response.data.results])
//         if (response.data.next) {
//           swapiGetCategory(response.data.next)
//         }
//       }

//       // const responseArray1 = await axios.get(`${BASE_URL}/starships/?page=1`)
//       // const responseArray2 = await axios.get(`${BASE_URL}/starships/?page=2`)
      
//       swapiGetCategory(`${BASE_URL}people/`)
//       setStarshipList(starshipResults)

//     }
//     getStarships()