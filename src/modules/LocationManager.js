const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(e => e.json())
  },
  removeAndList(id) {
    return fetch(`http://localhost:5002/locations/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/locations`))
      .then(e => e.json())
  }
}