class CapitalProducts {
    constructor() {
      this.capitalProductsAdapter = new CapitalProductsAdapter()
      this.fetchCapitalProducts()
    
    }

    fetchCapitalProducts() {
        this.capitalProductsAdapter.fetchCapitalProductsData().then((data) => {
          Store.addCapitalProducts(data)
        })
      }

      static getCapitalProductsFromStore() {
        return Store.getCapitalProducts()
      }

      static bindingCapitalProductsEventListener() {
        const capitalProductsDivs = document.getElementsByClassName("content-div")
        for (let item of capitalProductsDivs) {
          item.addEventListener("click", () => {
            const selectedCapitalProduct = item
            Navbar.updateTitle("Capital Products")
            HomePage.clearCapitalProductsText()
            HomePage.getCapitalProductsDetails(selectedCapitalProduct)
          })
        }
      }


    }