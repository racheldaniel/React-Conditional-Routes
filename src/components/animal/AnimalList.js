import React, { Component } from 'react';
import dog from "./DogIcon.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Animal.css"

export default class AnimalList extends Component {
  findOwner(animalId) {
    //pulls the joiner table for pets and owners, then returns a new, filtered array with only pet that matches the pet ID entered as a parameter
    let joinerArray = this.props.pets.filter(pet => animalId === pet.petId)
    let ownerNames = []
    //iterates through the joiner array, pulls the ownerId for each joiner table row, filters the array of owners into a new array showing only this particular pet's owner(s), then pushes just those names into a new array
    joinerArray.forEach((joiner) => {
      let ownId = joiner.ownerId
      let ownerName = this.props.owners.filter(owner => owner.id === ownId)
        .map(owner => owner.name)
      ownerNames.push(ownerName)
    })
    //joins owners in a text string
    let ownerText = ownerNames.join(", ")
    return ownerText
  }
  render() {
    return (
      <section className="animals">
        {
          this.props.animals.map(animal =>
            <div className="card" key={animal.id}>
              <div className="card-body">
                <h5 className="card-title">
                   {animal.name}
                </h5>
                <img src={dog} alt={animal.name} className="icon--dog" />

                <p className="card-text">
                  Human(s): {this.findOwner(animal.id)}
                </p>
                <a href="#"
                  onClick={() => this.props.deleteAnimal(animal.id)}
                  className="card-link">Delete</a>
              </div>
            </div>
          )
        }
      </section>
    )
  }
}


