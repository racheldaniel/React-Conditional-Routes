import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export default class LocationList extends Component {
  render() {
    return (
      <section className="locations">
        {
          this.props.locations.map(location =>
            <div className="card" key={location.id}>
              <div className="card-body">
                <h3 className="card-title">
                  {location.name}
                </h3>
                <p className="card-text">
                  {location.address}
                </p>
              </div>

            </div>
          )
        }
      </section>
    )
  }
}

