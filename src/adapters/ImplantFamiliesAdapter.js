class ImplantFamiliesAdapter {
    constructor() {
      this.dataUrl = "../../data/implantFamiliesData.json"
    }
  
    fetchImplantFamiliesData() {
      return fetch("../../data/implantFamiliesData.json").then((resp) => resp.json())
    }
  }