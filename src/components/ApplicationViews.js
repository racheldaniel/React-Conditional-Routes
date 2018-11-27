import { Route, Redirect } from 'react-router-dom'
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
import AnimalDetail from "../components/animal/AnimalDetail"
import AnimalForm from "../components/animal/AnimalForm"
import EmployeeForm from "../components/employee/EmployeeForm"
import OwnerForm from "../components/owner/OwnerForm"
import Login from './authentication/Login'


export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  state = {
    owners: [],
    employees: [],
    locations: [],
    animals: [],
    petCrosswalk: []
  }
  componentDidMount() {

    AnimalManager.getAllAnimals().then(allAnimals => {
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
  deleteAnimal = (id) => {
    return AnimalManager.removeAndListAnimals(id)
      .then(animals => this.setState({
        animals: animals
      })
      )
  }
  deleteEmployee = id => {
    return EmployeeManager.removeAndList(id)
      .then(employees => this.setState({
        employees: employees
      })
      )
  }
  deleteOwner = id => {
    return OwnerManager.removeAndList(id)
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  searchOwners = (input) => {
    return fetch(`http://localhost:5002/owners/?q=${input}`)
      .then(e => e.json())
  }

  addAnimal = (animal) => AnimalManager.postAnimal(animal)
    .then(() => AnimalManager.getAllAnimals())
    .then(animals => this.setState({
      animals: animals
    }))

  addEmployee = (employee) => EmployeeManager.postEmployee(employee)
    .then(() => EmployeeManager.getAllEmployees())
    .then(employees => this.setState({
      employees: employees
    }))

  addOwner = (owner) => OwnerManager.postOwner(owner)
    .then(() => OwnerManager.getAllOwners())
    .then(owners => this.setState({
      owners: owners
    }))

  addCrosswalk = (crosswalk) => PetCrosswalkManager.postCrosswalk(crosswalk)
    .then(() => PetCrosswalkManager.getAll())
    .then(petCrosswalk => this.setState({
      petCrosswalk: petCrosswalk
    }))


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList locations={this.state.locations} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/login" component={Login} />
        <Route exact path="/animals" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props}
              animals={this.state.animals}
              owners={this.state.owners}
              pets={this.state.petCrosswalk}
              deleteAnimal={this.deleteAnimal} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail
            {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props}
            addAnimal={this.addAnimal}
            employees={this.state.employees} />
        }} />
        <Route exact path="/employees" render={props => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props}
              deleteEmployee={this.deleteEmployee}
              employees={this.state.employees} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props}
            addEmployee={this.addEmployee} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList {...props}
              owners={this.state.owners}
              deleteOwner={this.deleteOwner} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props}
            addOwner={this.addOwner}
            addCrosswalk={this.addCrosswalk}
            animals={this.state.animals}
            owners={this.state.owners} />
        }} />

        <Route path="/search" render={(props) => {
          return <Search
            searchOwners={this.searchOwners} />
        }} />
      </React.Fragment>
    )
  }
}


