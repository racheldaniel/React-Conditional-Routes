import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import Search from './search/Search'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import PetCrosswalkManager from "../modules/PetCrosswalkManager"


export default class ApplicationViews extends Component {


  state = {
    owners: [],
    employees: [],
    locations: [],
    animals: [],
    petCrosswalk: []
  }
  componentDidMount() {

    AnimalManager.getAll().then(allAnimals => {
      this.setState({
        animals: allAnimals
      })
    })
      .then(() => {
        EmployeeManager.getAll().then(allEmployees => {
          this.setState({
            employees: allEmployees
          })
        })
      })
      .then(() => {
        LocationManager.getAll().then(allLocations => {
          this.setState({
            locations: allLocations
          })
        })
      })
      .then(() => {
        OwnerManager.getAll().then(allOwners => {
          this.setState({
            owners: allOwners
          })
        })
      })
      .then(() => {
        PetCrosswalkManager.getAll().then(allPets => {
          this.setState({
            petCrosswalk: allPets
          })
        })
      })
  }
  deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json())
      .then(animals => this.setState({
        animals: animals
      })
      )
  }
  deleteEmployee = id => {
    return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/employees`))
      .then(e => e.json())
      .then(employees => this.setState({
        employees: employees
      })
      )
  }
  deleteOwner = id => {
    return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/owners`))
      .then(e => e.json())
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  searchOwners = (input) => {
    return fetch(`http://localhost:5002/owners/?q=${input}`)
      .then(e => e.json())
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList
            animals={this.state.animals}
            owners={this.state.owners}
            pets={this.state.petCrosswalk}
            deleteAnimal={this.deleteAnimal} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList
            employees={this.state.employees}
            deleteEmployee={this.deleteEmployee} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList
            owners={this.state.owners}
            deleteOwner={this.deleteOwner} />
        }} />
        <Route path="/search" render={(props) => {
          return <Search
            searchOwners={this.searchOwners} />
        }} />
      </React.Fragment>
    )
  }
}

