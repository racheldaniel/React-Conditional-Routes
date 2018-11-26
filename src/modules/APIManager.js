const remoteURL = "http://localhost:5002"

export default class APIManager {
  constructor(table){
    this.table = table
  }

  get(id) {
    return fetch(`${remoteURL}/${this.table}/${id}`).then(data => data.json())
  }

  getAll() {
    return fetch(`${remoteURL}/${this.table}`).then(data => data.json())
  }

  removeAndList(id) {
    return fetch(`http://localhost:5002/${this.table}/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then((()=> this.getAll()))
  }

  post(newThing) {
    return fetch(`http://localhost:5002/${this.table}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newThing)
    })
      .then(e => e.json())
      .then((()=> this.getAll()))

  }

}