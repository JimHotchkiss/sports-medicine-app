class XflowErrorsAdapter {
  constructor() {
    this.dataUrl = "../../data/xflow-errors.json"
  }

  fetchXflowErrorsData() {
    return fetch(this.dataUrl).then((resp) => resp.json())
  }
}
