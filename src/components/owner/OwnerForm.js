import React, { Component } from "react"
import "./Owner.css"

export default class OwnerForm extends Component {
  state = {
    name: "",
    phoneNumber: "",
    animal: ""

  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  /*
      Local method for validation, creating Owner object, and
      invoking the function reference passed from parent component
   */
  constructNewOwner = evt => {
    evt.preventDefault()
    if (this.state.name === "") {
      window.alert("Please enter a name")
    } else {
      const owner = {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber
      }

      // Create the owner and redirect user to owner list
      this.props.addOwner(owner)
        .then(() => {
          const crosswalk = {
            petId: this.props.animals.find(e => e.name === this.state.animal).id,
            ownerId: this.props.owners.find(e => e.name === this.state.name).id
          }
          this.props.addCrosswalk(crosswalk)
    })
      .then(() => this.props.history.push("/owners"))
  }
}



render() {
  return (
    <React.Fragment>
      <form className="ownerForm">
        <div className="form-group">
          <label htmlFor="name">Owner name</label>
          <input type="text" required
            className="form-control"
            onChange={this.handleFieldChange}
            id="name"
            placeholder="owner name" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" required
            className="form-control"
            onChange={this.handleFieldChange}
            id="phoneNumber"
            placeholder="phone number" />
        </div>
        <div className="form-group">
          <label htmlFor="animal">Who does this Human belong to?</label>
          <select defaultValue="" name="animal" id="animal"
            onChange={this.handleFieldChange}>
            <option value="">Select an animal</option>
            {
              this.props.animals.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
            }
          </select>
        </div>
        <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
      </form>
    </React.Fragment>
  )
}
}