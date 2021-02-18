class NeedleAdapter {
  constructor() {
    this.dataUrl = "../../data/needlesData.json"
  }

  fetchNeedleData() {
    console.log("fetch")
    return fetch(this.dataUrl).then((resp) => resp.json())
  }
}
