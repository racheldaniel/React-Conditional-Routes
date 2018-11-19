import React, { Component } from 'react';

class AnimalList extends Component {
  render() {
    return (
      <section className="animals">
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
            <h3 >
              {animal.name}
            </h3>
            <div>
              {animal.address}
            </div>
            </div>
            )
        }
      </section>
    )
  }
}

export default AnimalList