import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        {
          this.props.employees.map(employee =>
            <div className="card" key={employee.id}>
              <div className="card-body">
                <h5 className="card-title">
                  {employee.name}
                </h5>
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

