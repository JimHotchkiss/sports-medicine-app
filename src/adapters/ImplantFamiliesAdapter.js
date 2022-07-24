class ImplantFamiliesAdapter {
    constructor() {
      this.dataUrl = "../../data/implantFamiliesData.json"
    }
  
    fetchImplantFamiliesData() {
      console.log('ImplantFamiliesAdapter')
      return fetch(this.dataUrl).then((resp) => resp.json())
    }
  }