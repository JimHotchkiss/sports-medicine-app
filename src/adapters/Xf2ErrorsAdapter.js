class Xf2ErrorsAdapter {
  constructor() {
    this.dataUrl = "../../data/xf2-errors.json"
  }

  fetchXf2ErrorsData() {
    return fetch(this.dataUrl).then((resp) => resp.json())
  }
}
