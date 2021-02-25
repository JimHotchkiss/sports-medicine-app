class ShaverAdapter {
  constructor() {
    this.dataUrl = "../../data/shaverData.json"
  }

  fetchShaverData() {
    return fetch(this.dataUrl).then((resp) => resp.json())
  }
}
