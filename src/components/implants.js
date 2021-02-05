class Implants {
  constructor() {
    this.implantAdapter = new ImplantAdapter()
    this.fetchInplantsSpecifications()
    this.implants = []
  }

  fetchInplantsSpecifications() {
    this.implantAdapter.fetchImplantData().then((data) => {
      Store.addInserts(data)
    })
    // .then(() => {
    //   return this.implants
    // })
  }

  static bindingImplantsEventListener(implants) {
    const implantDivs = document.getElementsByClassName("implant-div")
    for (let item of implantDivs) {
      item.addEventListener("click", () => {
        const selectedInsert = item.id
        UpdateHomePage.clearImplantText()
        UpdateHomePage.showImplantDetails()
      })
    }
  }
}
