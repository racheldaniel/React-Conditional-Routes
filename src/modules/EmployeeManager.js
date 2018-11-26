import APIManager from "./APIManager"

class EmployeeManager extends APIManager {

  getAllEmployees() {
    return this.getAll()
  }

  postEmployee(newEmployee){
    return this.post(newEmployee)
  }
}
export default new EmployeeManager("employees")
