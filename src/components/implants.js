class Implants {
  constructor() {
    this.implantAdapter = new ImplantAdapter()
    this.fetchInplantsSpecifications()
    this.fetchNeedleSpecifications()
    this.needleAdapter = new NeedleAdapter()
  }

  fetchInplantsSpecifications() {
    this.implantAdapter.fetchImplantData().then((data) => {
      Store.addInserts(data)
    })
  }

  fetchNeedleSpecifications() {
    console.log(this.needleAdapter)
    // this.needleAdapter.fetchNeedleData().then((data) => {
    //   console.log(data)
    //   Store.addInserts(data)
    // })
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
