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

      static bindingImplantFamiliesEventListener() {
        const implantFamilyDivs = document.getElementsByClassName("implant-family-div")
        for (let item of implantFamilyDivs) {
          item.addEventListener("click", () => {
            const userSelection = item.dataset.family
            const userLocation = 'family'
            Store.assignLocation(userLocation)
            Store.setUserSelection(userSelection)
            Navbar.updateTitle(item, this.features)
            Search.clearSearchField()
            let selectedFamily = item.dataset.family
            ImplantFamilies.selectedImplantFamily(selectedFamily)
          })
        }
      }

      static getImplantFamiliesFromStore() {
        return Store.getImplantFamilies()
      }

      static selectedImplantFamily(selectedFamily) {
        const implantFamilies = Store.getImplantFamilies()
        const inserts = Store.getInserts()
        const selectedFamilyImplantsArray = []
        inserts.map(insert => {
          if (insert.implant.family == selectedFamily) {
            selectedFamilyImplantsArray.push(insert)
          }
        })
        Navbar.updateTitle(selectedFamily)
        HomePage.renderSearchField()
        Search.bindInsertSearchEventListener()
        HomePage.clearImplantFamliesText()
        Navbar.showBackBtn()
        HomePage.renderImplants(selectedFamilyImplantsArray)
      }
}