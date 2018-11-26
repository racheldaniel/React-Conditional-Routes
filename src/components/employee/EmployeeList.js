import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="employeeButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/employees/new")
            }
            }>
            Add Employee
        </button>
        </div>
        <section className="employees">
          {
            this.props.employees.map(employee =>
              <div className="card" key={employee.id}>
                <div className="card-body">
                  <h5 className="card-title">
                    {employee.name}
                  </h5>
                  <a href="#"
                    onClick={() => this.props.deleteEmployee(employee.id)}
                    className="card-link">Delete</a>
                </div>
              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}

