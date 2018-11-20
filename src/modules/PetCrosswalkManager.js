const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/petCrosswalk/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/petCrosswalk`).then(e => e.json())
  }
}