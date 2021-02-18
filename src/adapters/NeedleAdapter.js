class NeedleAdapter {
  constructor() {
    this.dataUrl = "../../data/needlesData.json"
  }

  fetchNeedleData() {
    return fetch(this.dataUrl).then((resp) => resp.json())
  }
}
