class ImplantFamiliesAdapter {
    constructor() {
      // this.dataUrl = "../../data/implantFamiliesData.json"
      this.dataUrl = "../../data/implantData.json"
    }
  
    fetchImplantFamiliesData() {
      return fetch(this.dataUrl).then((resp) => resp.json())
    }
  }