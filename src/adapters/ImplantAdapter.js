class ImplantAdapter {
  constructor() {
    this.dataUrl = "../../data/implantData.json"
  }

  testFetch() {
    fetch(this.dataUrl)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
  }
}
