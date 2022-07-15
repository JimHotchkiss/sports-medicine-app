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

      static bindingCapitalProductsEventListener(e) {
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

      static bindingAlphaventProductsEventListener(alphavent_products) {
        const capitalProductsDivs = document.getElementsByClassName("content-div")
        for (let item of capitalProductsDivs) {
          item.addEventListener("click", () => {
            let selected_alphavent = ""
            alphavent_products.map((product, i) => {
              if (product.name === item.id) {
              return   selected_alphavent = product
              }
            })
            Navbar.updateTitle("Capital Products")
            HomePage.clearCapitalProductsText()
            HomePage.renderAlphaventProductDetails(selected_alphavent)
          })
        }
      }

     


    }