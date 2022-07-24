class ImplantFamiliesAdapter {
    constructor() {
      this.dataUrl = "../../data/implantFamiliesData.json"
    }
  
    fetchImplantFamiliesData() {
      return fetch(this.dataUrl).then((resp) => resp.json())
    }
  }