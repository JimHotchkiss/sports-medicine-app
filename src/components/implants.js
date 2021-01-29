class Implants {
  constructor() {
    this.implantAdapter = new ImplantAdapter()
    this.fetchInplantsSpecifications()
    this.implants = []
  }

  fetchInplantsSpecifications() {
    this.implantAdapter
      .fetchImplantData()
      .then((data) => {
        data.map((implant) => {
          this.implants.push(implant)
        })
      })
      .then(() => {
        return this.implants
      })
  }
}
