import APIManager from "./APIManager"

class PetCrosswalkManager extends APIManager {

  postCrosswalk(newCrosswalk){
    return this.post(newCrosswalk)
  }
}
export default new PetCrosswalkManager("petCrosswalk")
