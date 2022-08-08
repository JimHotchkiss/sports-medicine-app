class ImplantFamilies {
    constructor() {
      // console.log('fetch')
      // this.implantFamiliesAdapter = new ImplantFamiliesAdapter()
      this.implantFamiliesData = {"implant_families":[
        {
          "id": "Alphavent", "name": "Alphavent", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "iconix", "name": "Iconix", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "iconix_speed", "name": "Iconix Speed", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "cinchlock", "name": "Cinchlock", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "nanotack", "name": "NanoTack", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "reelx", "name": "ReelX", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "omega", "name": "Omega", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "biosteonintraline", "name": "Biosteon Intraline", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "knotilusanchor", "name": "Knotilus Anchor", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "peekzip", "name": "PEEK Zip", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "peekintraline", "name": "PEEK Intraline", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "twinloop", "name": "Twinloop", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "titaniumintraline", "name": "Titanium Intraline", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        },
        {
            "id": "titaniumwedgeanchor", "name": "Titanium Wedge Anchor", "iconUrl": "../images/placeholder.png", "description": "Baseball ipsum dolor sit amet screwball contact, rope range. Moneyball pitchout bullpen walk off stance defensive indifference right fielder."
        }
     ]
    }
      // this.fetchInplantFamilies()
      Store.addImplantFamilies(this.implantFamiliesData)
      
    
    
    }

    // fetchInplantFamilies() {
    //   console.log(this.implantFamiliesData)
    //   Store.addImplantFamilies(this.implantFamiliesData)
    //   Store.addImplantFamilies(this.implantFamiliesData)
    //     this.implantFamiliesAdapter.fetchImplantFamiliesData().then((data) => {
    //       return console.log(data)
    //       Store.addImplantFamilies(data)
    //     })
    //   }

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