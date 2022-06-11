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

      static bindingCapitalProductsEventListener() {
        const capitalProductsDivs = document.getElementsByClassName("capital-product-div")
        for (let item of capitalProductsDivs) {
          item.addEventListener("click", () => {
            const selectedCapitalProduct = item
            Navbar.updateTitle(item)
            HomePage.clearCapitalProductsText()
            HomePage.getCapitalProductsDetails(selectedCapitalProduct)
          })
        }
      }


    }