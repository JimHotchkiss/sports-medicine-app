class ImplantFamilies {
    constructor() {
      this.implantFamiliesAdapter = new ImplantFamiliesAdapter()
      console.log('fetch')
      this.fetchInplantFamilies()
    
    }

    fetchInplantFamilies() {
        this.implantFamiliesAdapter.fetchImplantFamiliesData().then((data) => {
          console.log(data)
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
        console.log(selectedFamily)
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
        if (selectedFamilyImplantsArray[0].implant.family === 'Alphavent') {
          const alphaventProducts = selectedFamilyImplantsArray[0].implant.alphavent_products
          Navbar.showAlphaventBackBtn(alphaventProducts)
          HomePage.renderAlphaventProducts(alphaventProducts)
        } else {
          Navbar.showBackBtn()
          HomePage.renderImplants(selectedFamilyImplantsArray)
        }
      }
}