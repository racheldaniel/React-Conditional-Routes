import React, { Component } from 'react';

class OwnerList extends Component {
  render() {
    return (
      <section className="owners">
        {
          this.props.owners.map(owner =>
            <div key={owner.id}>
              <h3>
                {owner.name}
              </h3>
              <div>
                {owner.phoneNumber}
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

export default OwnerList