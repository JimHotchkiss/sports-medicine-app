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
            Navbar.updateTitle(item, this.features)
            Search.clearSearchField()
            let selectedFamily = item.dataset.family
            ImplantFamilies.selectedImplantFamily(selectedFamily)
          })
        }
      }

      static selectedImplantFamily(selectedFamily) {
        console.log('selected Family', selectedFamily)
        const inserts = Store.getInserts()
        const selectedFamilyImplantsArray = []
        inserts.map(insert => {
          if (insert.implant.family == selectedFamily) {
            selectedFamilyImplantsArray.push(insert)
          }
        })
        HomePage.renderSearchField()
        Search.bindInsertSearchEventListener()
        HomePage.clearImplantFamliesText()
        HomePage.renderImplants(selectedFamilyImplantsArray)
      }
}