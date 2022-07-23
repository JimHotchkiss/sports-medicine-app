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
        const implantFamilyDivs = document.getElementsByClassName("content-div")
        for (let item of implantFamilyDivs) {
          item.addEventListener("click", () => { 
            const userSelection = item.dataset.family
            Store.setUserSelection(userSelection)
            // Navbar.updateTitle(item)
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
        const inserts = Store.getInserts()
        const selectedFamilyImplantsArray = []
        inserts.map(insert => {
          if (insert.implant.family == selectedFamily) {
            selectedFamilyImplantsArray.push(insert)
          }
        })
        HomePage.clearImplantDetails()
        HomePage.renderSearchField()
        Search.bindInsertSearchEventListener()
        HomePage.clearImplantFamliesText()
        Navbar.showBackBtn()
        if (selectedFamilyImplantsArray[0].implant.family === 'Alphavent') {
          const alphaventProducts = selectedFamilyImplantsArray[0].implant.alphavent_products
          HomePage.renderAlphaventProducts(alphaventProducts)
        } else {
          HomePage.renderImplants(selectedFamilyImplantsArray)
        }
      }
}