class ImplantFamilies {
    constructor() {
      this.implantFamiliesAdapter = new ImplantFamiliesAdapter()
      this.fetchInplantFamilies()
    
    }

    fetchInplantFamilies() {
        this.implantFamiliesAdapter.fetchImplantFamiliesData().then((data) => {
          Store.addImplantFamilies(data)
        })
      }

      static bindingImplantsFamiliesEventListener() {
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