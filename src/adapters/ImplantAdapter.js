class ImplantAdapter {
  constructor() {
    this.dataUrl = "../../data/implantData.json"
  }

  fetchImplantData() {
    return fetch(this.dataUrl).then((resp) => resp.json())
  }
}
