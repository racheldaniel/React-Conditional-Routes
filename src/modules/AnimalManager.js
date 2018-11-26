import APIManager from "./APIManager"

class AnimalManager extends APIManager {
  getAnimal(id) {
    return this.get(id)
  }

  getAllAnimals() {
    return this.getAll()
  }

  removeAndListAnimals(id){
    return this.removeAndList(id)
  }
  postAnimal(newAnimal){
    return this.post(newAnimal)
  }
}
export default new AnimalManager("animals")
