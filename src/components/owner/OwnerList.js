import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export default class OwnerList extends Component {
  render() {
    return (
      <section className="owners">
        {
          this.props.owners.map(owner =>
            <div className="card" key={owner.id}>
              <div className="card-body">
                <h3 className="card-title">
                  {owner.name}
                </h3>
                <p className="card-text">
                  {owner.phoneNumber}
                </p>
                <a href="#"
                  onClick={() => this.props.deleteOwner(owner.id)}
                  className="card-link">Delete</a>
              </div>

            </div>
          )
        }
      </section>
    )
  }
}

