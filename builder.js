
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)


const characters = require('./json/allCharacters.json')
const species = require('./json/allSpecies.json')
const vehicles = require('./json/allVehicles.json')
const planets = require('./json/allPlanets.json')
const films = require('./json/allFilms.json')
const series = require('./json/allSeries.json')


const apiFolderPath = 'api'

 const rebuildCharacters = async () => {
   await Promise.all(characters.map(c => {
     const filepath = path.join(__dirname, apiFolderPath, 'characters', `${c.id}.json`)
     return writeFile(filepath, JSON.stringify(c, null, 2))
   }))
   .catch(console.error)

   console.log('build characters successful')
 }

 const rebuildSpecies = async () => {
   await Promise.all(species.map(c => {
     const filepath = path.join(__dirname, apiFolderPath, 'species', `${c.id}.json`)
     return writeFile(filepath, JSON.stringify(c, null, 2))
   }))
   .catch(console.error)

   console.log('build species successful')
 }

 const rebuildVehicles = async () => {
   await Promise.all(vehicles.map(c => {
     const filepath = path.join(__dirname, apiFolderPath, 'vehicles', `${c.id}.json`)
     return writeFile(filepath, JSON.stringify(c, null, 2))
   }))
   .catch(console.error)

   console.log('build vehicles successful')
 }

  const rebuildPlanets = async () => {
    await Promise.all(planets.map(c => {
      const filepath = path.join(__dirname, apiFolderPath, 'planets', `${c.id}.json`)
      return writeFile(filepath, JSON.stringify(c, null, 2))
    }))
    .catch(console.error)

    console.log('build planets successful')
  }

  const rebuildFilms = async () =>{
    await Promise.all(films.map(c => {
      const filepath = path.join(__dirname, apiFolderPath, 'films', `${c.id}.json`)
      return writeFile(filepath, JSON.stringify(c,null,2))
    }))
    .catch(console.error)

    console.log('build films successful')
  }

  const rebuildSeries = async () => {
    await Promise.all(series.map(c => {
      const filepath = path.join(__dirname, apiFolderPath, 'series', `${c.id}.json`)
      return writeFile(filepath, JSON.stringify(c,null,2))
    }))
    .catch(console.error)
    
    console.log('build series sucessful')
  }


rebuildFilms()
rebuildCharacters()
rebuildSpecies()
rebuildVehicles()
rebuildPlanets()
rebuildSeries()


