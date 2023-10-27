import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import { BASE_URL } from './globals'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  // const [starshipResults, setStarshipResults] = useState([])
  const [filmsList, setFilmsList] = useState([])
  const [peopleList, setPeopleList] = useState([])
  const [planetsList, setPlanetsList] = useState([])
  const [speciesList, setSpeciesList] = useState([])
  const [starshipList, setStarshipList] = useState([])
  const [vehiclesList, setVehiclesList] = useState([])


  useEffect(() => {
    //Films
    const getFilmsList = async() => {
      const filmsPage1 = await axios.get(`${BASE_URL}films/`)
      setFilmsList(filmsPage1.data.results)
    }
    getFilmsList()

    //People
    const getPeopleList = async() => {
      const peoplePage1 = await axios.get(`${BASE_URL}people/`)
      setPeopleList(peoplePage1.data.results)
    }
    getPeopleList()

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
    const getStarshipsList = async() => {
      const starshipPage1 = await axios.get(`${BASE_URL}starships/`)
      setStarshipList(starshipPage1.data.results)
    }
    getStarshipsList()

    //Vehicles
    const getVehiclesList = async() => {
      const vehiclesPage1 = await axios.get(`${BASE_URL}vehicles/`)
      setVehiclesList(vehiclesPage1.data.results)
    }
    getVehiclesList()
  },[])

  return (
    <div className='App'>
      <Header />
      <Main 
      filmsList={filmsList}
      peopleList={peopleList}
      planetsList={planetsList}
      speciesList={speciesList}
      starshipList={starshipList}
      vehiclesList={vehiclesList}
      />
    </div>
    )
  // )
}

export default App


// const getStarships = () => {
      
    //   // const updateStarshipArray = async (array) => {
    //   //   starshipArray.concat(array)
    //   // }

    //   const swapiGetCategory = async (url) => {
    //     console.log('url', url)
    //     const response = await axios.get(url)
    //     console.log(url, response.data.results)
    //     let placeholder = starshipResults
    //     placeholder.concat(response.data.results)
    //     setStarshipResults(placeholder)
    //     // setStarshipResults([...starshipResults,response.data.results])
    //     if (response.data.next) {
    //       swapiGetCategory(response.data.next)
    //     }
    //   }

    //   // const responseArray1 = await axios.get(`${BASE_URL}/starships/?page=1`)
    //   // const responseArray2 = await axios.get(`${BASE_URL}/starships/?page=2`)
      
    //   swapiGetCategory(`${BASE_URL}starships/`)
    //   setStarshipList(starshipResults)

    // }
    // getStarships()