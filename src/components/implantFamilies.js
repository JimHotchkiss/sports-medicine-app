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

      static bindingInplantFamiliesEventListener() {
        const implantFamilyDivs = document.getElementsByClassName("implant-family-div")
        for (let item of implantFamilyDivs) {
          item.addEventListener("click", () => {
            const inserts = Store.getInserts()
            HomePage.renderSearchField()
            Search.bindInsertSearchEventListener()
            HomePage.clearImplantFamliesText()
            HomePage.renderImplants(inserts)
          })
        }
      }
}