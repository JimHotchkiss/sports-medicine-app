class ImplantFamiliesAdapter {
    constructor() {
      // this.dataUrl = "../../data/implantFamiliesData.json"
      this.dataUrl = "../../probesData.json"
    }
  
    fetchImplantFamiliesData() {
      return fetch(this.dataUrl).then((resp) => resp.json())
    }
  }