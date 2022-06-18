class Implants {
  constructor() {
    this.implantAdapter = new ImplantAdapter()
    this.fetchInplantsSpecifications()
    this.needleAdapter = new NeedleAdapter()
    this.fetchNeedleSpecifications()
  }

  fetchInplantsSpecifications() {
    this.implantAdapter.fetchImplantData().then((data) => {
      Store.addInserts(data)
    })
  }

  fetchNeedleSpecifications() {
    this.needleAdapter.fetchNeedleData().then((data) => {
      Store.addNeedles(data)
    })
  }

  static getImplantsFromStore() {
    return Store.getInserts()
  }

  static bindingImplantsEventListener() {
    const implantDivs = document.getElementsByClassName("implant-div")
    for (let item of implantDivs) {
      item.addEventListener("click", () => {
        const selectedInsert = item
        HomePage.clearImplantText()
        Search.clearSearchField()
        HomePage.getImplantDetails(selectedInsert)
      })
    }
  }
}
