class CapitalProductsAdapter {
    constructor() {
      this.dataUrl = "../../data/capitalProductsData.json"
    }
  
    fetchCapitalProductsData() {
      return fetch(this.dataUrl).then((resp) => resp.json())
    }
  }