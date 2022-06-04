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
    }