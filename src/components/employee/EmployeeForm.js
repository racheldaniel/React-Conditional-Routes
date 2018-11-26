import React, { Component } from "react"
import "./Employee.css"

export default class EmployeeForm extends Component {
  state = {
    name: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  /*
      Local method for validation, creating employee object, and
      invoking the function reference passed from parent component
   */
  constructNewEmployee = evt => {
    evt.preventDefault()
    if (this.state.name === "") {
      window.alert("Please enter a name")
    } else {
      const employee = {
        name: this.state.name
      }
      // Create the employee and redirect user to employee list
      console.log(employee)
      this.props.addEmployee(employee).then(() => this.props.history.push("/employees"))
    }
  }



  render() {
    return (
      <React.Fragment>
        <form className="employeeForm">
          <div className="form-group">
            <label htmlFor="name">Employee name</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="employee name" />
          </div>
          <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}