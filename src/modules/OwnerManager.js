import APIManager from "./APIManager"

class OwnerManager extends APIManager {
  getAllOwners() {
    return this.getAll()
  }

  postOwner(newOwner){
    return this.post(newOwner)
  }
}
export default new OwnerManager("owners")
