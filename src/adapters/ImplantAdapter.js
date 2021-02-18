class ImplantAdapter {
  constructor() {
    this.dataUrl = "../../data/implantData.json"
  }

  fetchImplantData() {
    console.log("fetch implant")
    return fetch(this.dataUrl).then((resp) => resp.json())
  }
}
