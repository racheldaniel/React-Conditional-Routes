import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

    // this.props.animals.forEach((animal) => {
    //   let crosswalk = this.props.petCrosswalk.filter(pet => {
    //     return petId === animal.id
    //   })[0]
    //   let owner = this.props.owners.filter(owner => {
    //     return owner.id === crosswalk.ownerId
    //   })[0]
export default class AnimalList extends Component {
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
                  <p className="card-text">
                    {/* {owner.name} */}
                  </p>
                </div>
              </div>
            )
          }
        </section>
      )
    }
  }


