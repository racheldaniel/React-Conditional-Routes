import React, { Component } from 'react';

class LocationList extends Component {
  render() {
    return (
      <section className="locations">
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              <h3>
                {location.name}
              </h3>
              <div>
                {location.address}
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

export default LocationList