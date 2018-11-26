import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
// import Search from './search/Search'

export default class NavBar extends Component {
  state = {
    searchInput: ""
  }
  handleSearch(e){
    this.setState({searchInput: e.target.value})
  }



  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Locations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/animals">Animals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/owners">Owners</Link>
          </li>
          <li className="nav-item">
            <form className="form-inline">
              <input type="text" className="form-control" name="name" value={this.state.searchInput} onChange={e => this.handleSearch(e)} />
              <Link className="nav-link btn btn-primary" to="/search"
              onClick={() => {
                console.log(this.state.searchInput)
                // return <Search searchInput={this.state.searchInput}/>
              }}
                  >Search</Link>
            </form>
          </li>
        </ul>
      </nav>
    )
  }
}

